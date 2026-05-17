// SPDX-License-Identifier: MIT OR Apache-2.0

fn session_image_url(source: SessionSource, event_index: usize, image_index: usize) -> String {
    format!(
        "/api/session/image/{event_index}/{image_index}?source={}",
        source.as_str()
    )
}

fn is_image_placeholder_text(text: &str) -> bool {
    matches!(text.trim(), "<image>" | "</image>")
}

fn mime_type_from_image_url(image_url: &str) -> String {
    image_url
        .strip_prefix("data:")
        .and_then(|rest| rest.split_once(',').map(|(metadata, _)| metadata))
        .and_then(|metadata| metadata.split(';').next())
        .filter(|mime_type| !mime_type.is_empty())
        .unwrap_or("image/*")
        .to_owned()
}

fn load_session_image(
    source: SessionSource,
    path: &Path,
    event_index: usize,
    image_index: usize,
    cache: &Mutex<HashMap<String, CachedSession>>,
) -> Result<SessionImage> {
    if let Some(offset) = cached_session_line_offset(source, path, cache, event_index)
        && let Ok(image) = load_session_image_at_offset(source, path, event_index, image_index, offset)
    {
        return Ok(image);
    }

    load_session_image_linear(source, path, event_index, image_index)
}

fn load_session_image_linear(
    source: SessionSource,
    path: &Path,
    event_index: usize,
    image_index: usize,
) -> Result<SessionImage> {
    let file =
        fs::File::open(path).with_context(|| format!("failed to open {}", path.display()))?;
    let reader = BufReader::new(file);

    for (line_index, line) in reader.lines().enumerate() {
        let line = line.with_context(|| format!("failed to read jsonl line {line_index}"))?;
        if line_index != event_index {
            continue;
        }

        return decode_session_image_line(source, &line, event_index, image_index);
    }

    Err(anyhow!("event {event_index} not found"))
}

fn load_session_image_at_offset(
    source: SessionSource,
    path: &Path,
    event_index: usize,
    image_index: usize,
    offset: u64,
) -> Result<SessionImage> {
    let mut reader = session_jsonl_reader_at(path, offset, false)?;
    let mut line = String::new();
    let read = reader
        .read_line(&mut line)
        .with_context(|| format!("failed to read jsonl line {event_index}"))?;
    if read == 0 {
        return Err(anyhow!("event {event_index} not found"));
    }

    decode_session_image_line(source, &line, event_index, image_index)
}

fn decode_session_image_line(
    source: SessionSource,
    line: &str,
    event_index: usize,
    image_index: usize,
) -> Result<SessionImage> {
    match source {
        SessionSource::Codex => {
            let entry: JsonlEntry = serde_json::from_str(line)
                .with_context(|| format!("invalid jsonl at line {}", event_index + 1))?;
            let image_url = image_url_at(&entry.payload, image_index)
                .ok_or_else(|| anyhow!("image {image_index} not found on event {event_index}"))?;
            decode_data_image_url(image_url)
        }
        SessionSource::Claude => {
            let entry: Value = serde_json::from_str(line)
                .with_context(|| format!("invalid jsonl at line {}", event_index + 1))?;
            let (mime_type, data) = claude_image_data_at(&entry, image_index)
                .ok_or_else(|| anyhow!("image {image_index} not found on event {event_index}"))?;
            decode_base64_image(&mime_type, &data)
        }
    }
}

fn image_url_at(payload: &Value, image_index: usize) -> Option<&str> {
    payload
        .get("content")?
        .as_array()?
        .iter()
        .filter_map(|part| part.get("image_url").and_then(Value::as_str))
        .nth(image_index)
}

fn claude_image_data_at(entry: &Value, image_index: usize) -> Option<(String, String)> {
    entry
        .pointer("/message/content")?
        .as_array()?
        .iter()
        .filter_map(|part| {
            let source = part.get("source")?;
            let data = source.get("data").and_then(Value::as_str)?;
            let mime_type = source
                .get("media_type")
                .and_then(Value::as_str)
                .unwrap_or("image/*");
            Some((mime_type.to_owned(), data.to_owned()))
        })
        .nth(image_index)
}

fn decode_data_image_url(image_url: &str) -> Result<SessionImage> {
    let Some(rest) = image_url.strip_prefix("data:") else {
        return Err(anyhow!("only embedded data images are supported"));
    };
    let Some((metadata, encoded)) = rest.split_once(',') else {
        return Err(anyhow!("invalid data image url"));
    };
    if !metadata
        .split(';')
        .any(|part| part.eq_ignore_ascii_case("base64"))
    {
        return Err(anyhow!("only base64 data images are supported"));
    }

    let bytes = BASE64_STANDARD
        .decode(encoded.as_bytes())
        .context("failed to decode image data")?;
    Ok(SessionImage {
        mime_type: mime_type_from_image_url(image_url),
        bytes,
    })
}

fn decode_base64_image(mime_type: &str, encoded: &str) -> Result<SessionImage> {
    let bytes = BASE64_STANDARD
        .decode(encoded.as_bytes())
        .context("failed to decode image data")?;
    Ok(SessionImage {
        mime_type: mime_type.to_owned(),
        bytes,
    })
}
