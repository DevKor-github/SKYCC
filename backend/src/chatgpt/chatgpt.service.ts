import { Injectable } from '@nestjs/common';
import { Configuration, OpenAIApi, ChatCompletionResponseMessage } from 'openai';


@Injectable()
export class ChatGptService {
    private readonly openai: OpenAIApi;

    constructor() {
        const configuration = new Configuration({
            apiKey: '',
        });
        this.openai = new OpenAIApi(configuration);
    }

    async complete(prompt: string): Promise<ChatCompletionResponseMessage> {
        const servicePrompt = '에서 날짜와 시간, 출발지, 목적지를 구분해줘.'
        const completion = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: '"' + prompt + '"' + servicePrompt }],
        });
        return completion.data.choices[0].message;
    }
}
