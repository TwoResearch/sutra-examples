import time

class ExampleUtil():
    @staticmethod
    def output(llm_chunk):
        if (not llm_chunk.isFinal):
            if (hasattr(llm_chunk, 'content')):
                print(llm_chunk.content, end='', flush=True)
                time.sleep(0.015)
        else:
            print(f"\n\n{llm_chunk}\n\n")

