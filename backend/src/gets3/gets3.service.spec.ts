import { Test, TestingModule } from '@nestjs/testing';
import { Gets3Service } from './gets3.service';

describe('Gets3Service', () => {
  let service: Gets3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Gets3Service],
    }).compile();

    service = module.get<Gets3Service>(Gets3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
