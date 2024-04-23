# ---
# sutra-light, sutra-pro, sutra-turbo

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

# ---
# sutra-online

url = "https://api.two.ai/v1/sutra-online/completion"

payload = {
    "userInput": "How many boroughs in New York City?",
    "style": {
        "tone": "funny",
        "format": "short"
    },
    "searchLocation": {
        "uule": "w+CAIQICIMTXVtYmFpLEluZGlh",
        "countryCode": "IN",
        "languageCode": "hi"
    }
}

response = requests.request("POST", url, json=payload, headers=headers)

print(response.text)
