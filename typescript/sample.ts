// ---
// sutra-light, sutra-pro, sutra-turbo

import { StreamDecoder } from './StreamDecoder';
import { ExampleUtil } from './ExampleUtil';
import axios, { AxiosRequestConfig } from 'axios';

async function testSutra() {
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
        messages: [ { role: 'user', content: 'मुझे मंगल ग्रह के बारे में 5 पैराग्राफ दीजिए' } ]
    }

    const streamDecoder = new StreamDecoder();
    const reply = await axios.post(url, body, cfg);
    const stream = reply.data;

    for await (const streamChunk of stream) {
        const llmChunks = streamDecoder.decode(streamChunk);
        for (const llmChunk of llmChunks) {
            await ExampleUtil.output(llmChunk);
        }
    }
}

// ---
// sutra-online

async function testSutraOnline() {
    const cfg: AxiosRequestConfig = {
            headers: {
                Authorization: process.env.SUTRA_API_KEY,
                'Content-Type': 'application/json',
                Accept: 'application/x-ndjson',
            },
            responseType: 'stream',
        };

    const url = 'https://api.two.ai/v1/sutra-online/completion';

    const body = {
        userInput: 'How many boroughs in New York City?',
        style: {tone:"funny",format:"short"},
        searchLocation: {uule:"w+CAIQICIMTXVtYmFpLEluZGlh",countryCode:"IN",languageCode:"hi"},
    }

    const streamDecoder = new StreamDecoder();
    const reply = await axios.post(url, body, cfg);
    const stream = reply.data;

    for await (const streamChunk of stream) {
        const llmChunks = streamDecoder.decode(streamChunk);
        for (const llmChunk of llmChunks) {
            await ExampleUtil.output(llmChunk);
        }
    }
}

(async (): Promise<void> => {
    await testSutra();
    await testSutraOnline();
    process.exit(0);
})();
