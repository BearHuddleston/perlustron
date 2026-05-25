// SPDX-License-Identifier: MIT OR Apache-2.0

use super::*;

pub(super) fn session_line_count_before(path: &Path, byte_length: u64) -> Result<usize> {
    let file = fs::File::open(path)
        .with_context(|| format!("failed to open session jsonl {}", path.display()))?;
    let mut reader = BufReader::new(file);
    let mut position = 0_u64;
    let mut count = 0_usize;
    let mut line = String::new();

    while position < byte_length {
        line.clear();
        let read = reader
            .read_line(&mut line)
            .with_context(|| format!("failed to count session jsonl lines {}", path.display()))?;
        if read == 0 {
            break;
        }
        position += read as u64;
        count += 1;
    }

    Ok(count)
}
