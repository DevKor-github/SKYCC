import { Test, TestingModule } from '@nestjs/testing';
import { ChatGptService } from './chatgpt.service';

describe('ChatGptService', () => {
  let service: ChatGptService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ChatGptService],
    }).compile();

    service = module.get<ChatGptService>(ChatGptService);
  });

  it('should be defined', async () => {
    const prompt = '5월 23일 오전 8시 서울에서 부산으로 가는 버스를 예약해줘'
    const completion = await service.complete(prompt);
    console.log(completion)
    expect(completion).toBeDefined();
  });
});
