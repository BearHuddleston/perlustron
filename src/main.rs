// SPDX-License-Identifier: MIT OR Apache-2.0

#[tokio::main]
async fn main() -> anyhow::Result<()> {
    perlustron::run().await
}
