import { Test, TestingModule } from '@nestjs/testing';
import { SttService } from './stt.service';

describe('SttService', () => {
  let service: SttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SttService],
    }).compile();

    service = module.get<SttService>(SttService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
