export class ExampleUtil {
    static async output(llmChunk: any): Promise<void> {
        if (!llmChunk.isFinal) {
            if ('content' in llmChunk) {
                process.stdout.write(llmChunk.content);
                await new Promise(f => setTimeout(f, 15));
            }
        } else {
            console.log(`\n\n${JSON.stringify(llmChunk)}\n\n`);
        }
    }
}
