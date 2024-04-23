# TypeScript

This directory contains TypeScript samples for API testing.

## Environment Setup
1. Install Node.js and npm.
2. Install TypeScript and any necessary typings:
   ```bash
   npm install -g typescript
   npm install
   ```

## Running the Samples

Compile and run a TypeScript sample:
  ```bash
  npx ts-node sample.ts
  ```

Which contains the following sample:
  ```typescript
  import axios, { AxiosRequestConfig } from 'axios';

  async function main() {
      const cfg: AxiosRequestConfig = {
              headers: {
                  Authorization: process.env.SUTRA_API_KEY,
                  'Content-Type': 'application/json',
                  Accept: 'application/x-ndjson',
              },
              responseType: 'stream',
          };

      const url = 'https://api.two.ai/v1/sutra-light/completion';

      const body = {
          model: 'sutra-light',
          messages: [ { role: 'user', content: 'How many boroughs in New York City?' } ]
      }

      const reply = await axios.post(url, body, cfg);
      const stream = reply.data;

      for await (const chunk of stream) {
          console.log(chunk.toString());
      }
  }

  (async () => await main())();
  ```

