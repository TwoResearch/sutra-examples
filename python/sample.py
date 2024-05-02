# ---
# sutra-light, sutra-pro, sutra-turbo

import requests
import os

from stream_decoder import StreamDecoder
from example_util import ExampleUtil

url = "https://api.two.ai/v1/sutra-light/completion"

payload = {
    "model": "sutra-light",
    "messages": [
        {"role": "user", "content": "मुझे मंगल ग्रह के बारे में 5 पैराग्राफ दीजिए"}
    ]
}
headers = {
    "Authorization": os.environ.get("SUTRA_API_KEY"),
    "Content-Type": "application/json",
    "Accept": "application/x-ndjson"
}

response = requests.request("POST", url, json=payload, headers=headers, stream=True)
stream_decoder = StreamDecoder()
for stream_chunk in response:
    llm_chunks = stream_decoder.decode(stream_chunk)
    for llm_chunk in llm_chunks:
        ExampleUtil.output(llm_chunk)


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

response = requests.request("POST", url, json=payload, headers=headers, stream=True)
stream_decoder = StreamDecoder()
for stream_chunk in response:
    llm_chunks = stream_decoder.decode(stream_chunk)
    for llm_chunk in llm_chunks:
        ExampleUtil.output(llm_chunk)
