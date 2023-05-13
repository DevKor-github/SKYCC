import { Test, TestingModule } from '@nestjs/testing';
import { Uploads3Controller } from './uploads3.controller';
import { Uploads3Service } from './uploads3.service';

describe('Uploads3Controller', () => {
  let controller: Uploads3Controller;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [Uploads3Controller],
      providers: [Uploads3Service],
    }).compile();

    controller = module.get<Uploads3Controller>(Uploads3Controller);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
