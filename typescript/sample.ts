// ---
// sutra-light, sutra-pro, sutra-turbo

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

// ---
// sutra-online

async function mainOnline() {
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

    const reply = await axios.post(url, body, cfg);
    const stream = reply.data;

    for await (const chunk of stream) {
        console.log(chunk.toString());
    }
}

(async () => await mainOnline())();
