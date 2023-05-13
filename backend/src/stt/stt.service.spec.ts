import { Test, TestingModule } from '@nestjs/testing';
import { SttService } from './stt.service';
import { ConfigModule, ConfigService } from '@nestjs/config';

const params = {
  TranscriptionJobName: 'test-4',
  LanguageCode: 'ko-KR', // For example, 'en-US'
  MediaFormat: 'mp4', // For example, 'wav'
  Media: {
    MediaFileUri:
      'https://s3-skycc-stt.s3.ap-northeast-2.amazonaws.com/1605fbc6-a9fd-4d46-b178-2225b5a546d1.m4a',
    // For example, "https://transcribe-demo.s3-REGION.amazonaws.com/hello_world.wav"
  },
  OutputBucketName: 's3-skycc-stt',
};

describe('SttService', () => {
  let service: SttService;
  let configService: ConfigService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      imports: [ConfigModule.forRoot()],
      providers: [SttService],
    }).compile();

    service = module.get<SttService>(SttService);
    configService = module.get<ConfigService>(ConfigService);
  });

  it('should be defined', async () => {
    const result = await service.startTranscriptionJob(params);
    console.log(result);
    expect(service).toBeDefined();
  });
});
