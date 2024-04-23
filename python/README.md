# Python

This directory contains sample scripts demonstrating how to test APIs using Python.

## Environment Setup
```bash
conda create -y -n sutra-docs-samples python=3.8
conda activate sutra-docs-samples
pip install -r requirements.txt
```

## Running the Samples

To run a sample Python script:
  ```bash
  python sample.py
  ```
  
Which contains the following sample:
  ```python
  import requests
  import os

  url = "https://api.two.ai/v1/sutra-light/completion"

  payload = {
      "model": "sutra-light",
      "messages": [
          {"role": "user", "content": "How many boroughs in New York City?"}
      ]
  }
  headers = {
      "Authorization": os.environ.get("SUTRA_API_KEY"),
      "Content-Type": "application/json",
      "Accept": "application/x-ndjson"
  }

  response = requests.request("POST", url, json=payload, headers=headers)

  print(response.text)
  ```
  
