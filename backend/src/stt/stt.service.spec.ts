import { Test, TestingModule } from '@nestjs/testing';
import { SttService } from './stt.service';

const params = {
  TranscriptionJobName: "test",
  LanguageCode: "ko-KR", // For example, 'en-US'
  MediaFormat: "m4a", // For example, 'wav'
  Media: {
      MediaFileUri: "",
    // For example, "https://transcribe-demo.s3-REGION.amazonaws.com/hello_world.wav"
  },
  OutputBucketName: "test"
};

describe('SttService', () => {
  let service: SttService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SttService],
    }).compile();

    service = module.get<SttService>(SttService);
  });

  it('should be defined', async () => {
    const result = await service.startTranscriptionJob(params)
    console.log(result)
    expect(service).toBeDefined();
  });
});
