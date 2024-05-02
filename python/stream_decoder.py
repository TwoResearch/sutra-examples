from dataclasses import dataclass, field, fields
from typing import Optional
import json
from collections import namedtuple

@dataclass
class LLMChunk:
    content: str
    sentTime: Optional[int] = field(default=None)
    isFinal: Optional[bool] = field(default=None)

@dataclass
class LLMReply:
    requestId: int
    userInput: str
    success: bool
    ttftMsec: int
    ttltMsec: int
    tokenCount: int
    wordCount: int
    errMsg: str
    isFinal: Optional[bool] = field(default=None)

class StreamDecoder():
    type_map = {
        'LLMChunk': LLMChunk,
        'LLMReply': LLMReply
    }

    def __init__(self):
        self.partial_undecoded = bytearray()

    def decode(self, stream_chunk):
        self.partial_undecoded += stream_chunk
        try:
            undecoded_chunks = self.partial_undecoded.decode('utf-8')
        except UnicodeDecodeError:
            return []

        decoded_chunks = []
        if undecoded_chunks.endswith('\n'):
            decoded_chunks = StreamDecoder.__decode_chunks(undecoded_chunks)
            self.partial_undecoded = bytearray()

        return decoded_chunks

    @staticmethod
    def __decode_chunks(undecoded_chunks):
        undecoded_chunk_list = undecoded_chunks.split('\n')
        decoded_chunks = []
        for undecoded in undecoded_chunk_list[:-1]:
            if undecoded:
                decoded_chunks.append(StreamDecoder.__decode_chunk(undecoded))

        return decoded_chunks

    @staticmethod
    def __decode_chunk(undecoded):
        data = json.loads(undecoded)
        type_name = data.pop('typeName')

        try:
            Type = StreamDecoder.type_map[type_name]
        except KeyError:
            raise ValueError(f"Unknown type: {type_name}")

        filtered = {f.name: data[f.name] for f in fields(Type) if f.name in data}
        return Type(**filtered)
