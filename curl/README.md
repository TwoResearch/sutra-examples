# Curl

This directory contains sample scripts demonstrating how to test APIs using Curl

## Running the Samples

To run a sample bash script:
  ```bash
  bash sample.sh
  ```
  
Which contains the following sample for `sutra-light`:
  ```bash
  curl -X POST "https://api.two.ai/v1/sutra-light/completion" \
    -H "Authorization: $SUTRA_API_KEY" \
    -H "Content-Type: application/json" \
    -H "Accept application/x-ndjson" \
    -d '{
    "model": "sutra-light",
    "messages": [
      {"role": "user", "content": "How many boroughs in New York City?"}
    ]
  }'
  ```
  
