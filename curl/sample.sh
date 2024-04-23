# sutra-light, sutra-pro, sutra-turbo
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

# sutra-online
curl -X POST "https://api.two.ai/v1/sutra-online/completion" \
  -H "Authorization: $SUTRA_API_KEY" \
  -H "Content-Type: application/json" \
  -H "Accept application/x-ndjson" \
  -d '{
  "userInput": "How many boroughs in New York City?",
  "style": {
    "tone": "funny",
    "format": "medium"
  },
  "searchLocation": {
    "uule": "w+CAIQICIMTXVtYmFpLEluZGlh",
    "countryCode": "IN",
    "languageCode": "hi"
  }
}'
