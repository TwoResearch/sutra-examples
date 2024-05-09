export class LLMChunk {
    content?: string;
    sentTime?: number;
    isFinal?: boolean;

    constructor(data: Partial<LLMChunk>) {
        this.content = data.content;
        this.sentTime = data.sentTime;
        this.isFinal = data.isFinal;
    }
}

export class LLMReply {
    requestId?: number;
    userInput?: string;
    success?: boolean;
    ttftMsec?: number;
    ttltMsec?: number;
    tokenCount?: number;
    wordCount?: number;
    errMsg?: string;
    isFinal?: boolean;

    constructor(data: Partial<LLMReply>) {
        this.requestId = data.requestId;
        this.userInput = data.userInput;
        this.success = data.success;
        this.ttftMsec = data.ttftMsec;
        this.ttltMsec = data.ttltMsec;
        this.tokenCount = data.tokenCount;
        this.wordCount = data.wordCount;
        this.errMsg = data.errMsg;
        this.isFinal = data.isFinal;
    }
}

export type ValidType = LLMChunk | LLMReply;

interface Constructor<T> {
    new (data: Partial<T>): T;
}

export class StreamDecoder {
    private decoder: any;
    private partialUndecoded: string;

    public constructor() {
        this.decoder = new TextDecoder;
        this.partialUndecoded = '';
    }

    private static readonly typeMap = new Map<string, Constructor<ValidType>>([
        ['LLMChunk', LLMChunk],
        ['LLMReply', LLMReply]
    ]);

    public decode(streamChunk: Buffer): ValidType[] {
        this.partialUndecoded += this.decoder.decode(streamChunk, {stream: true});

        let decodedChunks: ValidType[] = [];
        if (this.partialUndecoded.endsWith('\n')) {
            decodedChunks = StreamDecoder.decodeChunks(this.partialUndecoded);
            this.partialUndecoded = '';
        }
        return decodedChunks;
    }

    private static decodeChunks(undecodedChunks: string): ValidType[] {
        const undecodedChunkList = undecodedChunks.split('\n');
        const nSplits = undecodedChunkList.length;

        const decodedChunks: ValidType[] = [];
        for (let i = 0; i < nSplits - 1; i++) {
            const undecoded = undecodedChunkList[i];
            if (undecoded) {
                decodedChunks.push(StreamDecoder.decodeChunk(undecoded));
            }
        }
        return decodedChunks;
    }

    private static decodeChunk(undecoded: string): ValidType {
        const data = JSON.parse(undecoded);
        const typeName = data['typeName'];
        const Type = StreamDecoder.typeMap.get(typeName);

        if (!Type) {
            throw new Error(`Unknown type: ${typeName}`);
        }

        return new Type(data);
    }
}
