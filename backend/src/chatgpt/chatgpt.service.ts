import { Injectable, Logger } from '@nestjs/common';
import { Configuration, OpenAIApi, ChatCompletionResponseMessage } from 'openai';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class ChatGptService {
    private readonly openai: OpenAIApi;
    constructor(
        private readonly configService: ConfigService
    ) {
        const configuration = new Configuration({
            apiKey: this.configService.get('OPENAI_KEY'),
        });
        this.openai = new OpenAIApi(configuration);
    }

    async complete(prompt: string): Promise<JSON> {
        const servicePrompt = '에서 날짜와 시간, 출발지, 목적지를 구분해줘. 출력 형식은 json 형식으로 출력해줘. 구체적인 형식은 다음과 같아\n. {"date": 날짜\n,"time": 시간\n,"departure": 출발지\n,"destination": 목적지}'
        const completion = await this.openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: '"' + prompt + '"' + servicePrompt }],
        });
        const completionData = completion.data.choices[0].message.content;
        return JSON.parse(completionData)
    }
}
