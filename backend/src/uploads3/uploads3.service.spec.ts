import { Test, TestingModule } from '@nestjs/testing';
import { Uploads3Service } from './uploads3.service';

describe('Uploads3Service', () => {
  let service: Uploads3Service;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [Uploads3Service],
    }).compile();

    service = module.get<Uploads3Service>(Uploads3Service);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
