import { Test, TestingModule } from '@nestjs/testing';
import { ChatGptService } from './chatgpt.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

describe('ChatGptService', () => {
  let service: ChatGptService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [ChatGptService],
    }).compile();

    service = module.get<ChatGptService>(ChatGptService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', async () => {
    const prompt = '오월 십오일 서울에서 부산가는 기차아홉시 편예매해줘.'
    const completion = await service.complete(prompt);
    console.log(typeof completion);
    console.log(completion);
    expect(completion).toBeDefined();
  });
});
