import { Injectable } from '@nestjs/common';
import {
  StartTranscriptionJobCommand,
  TranscribeClient,
  StartTranscriptionJobCommandOutput,
  StartTranscriptionJobCommandInput,
} from '@aws-sdk/client-transcribe';
('');
import { ConfigService } from '@nestjs/config';

@Injectable()
export class SttService {
  private readonly transcribeClient: TranscribeClient;
  private readonly REGION = 'ap-northeast-2';

  constructor(private readonly configService: ConfigService) {
    this.transcribeClient = new TranscribeClient({
      region: this.REGION,
      credentials: {
        accessKeyId: this.configService.get('AWS_ACCESS_KEY'),
        secretAccessKey: this.configService.get('AWS_SECRET_KEY'),
      },
    });
  }

  async startTranscriptionJob(
    params: StartTranscriptionJobCommandInput,
  ): Promise<StartTranscriptionJobCommandOutput> {
    try {
      const data = await this.transcribeClient.send(
        new StartTranscriptionJobCommand(params),
      );
      return data;
    } catch (err) {
      console.log('Error', err);
    }
  }
}
