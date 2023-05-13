import { Injectable } from '@nestjs/common';
import {
  StartTranscriptionJobCommand,
  TranscribeClient,
  StartTranscriptionJobCommandOutput,
  StartTranscriptionJobCommandInput,
} from '@aws-sdk/client-transcribe';

@Injectable()
export class SttService {
  private readonly transcribeClient: TranscribeClient;
  private readonly REGION = 'REGION';
  constructor() {
    this.transcribeClient = new TranscribeClient({ region: this.REGION });
  }

  async startTranscriptionJob(
    params: StartTranscriptionJobCommandInput,
  ): Promise<StartTranscriptionJobCommandOutput> {
    try {
      const data = await this.transcribeClient.send(
        new StartTranscriptionJobCommand(params),
      );
      console.log('Transcription job started successfully');
      console.log('Success - put', data);
      return data;
    } catch (err) {
      console.log('Error', err);
    }
  }
}
