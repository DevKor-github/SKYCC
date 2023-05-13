import { Injectable } from '@nestjs/common';
import { StartTranscriptionJobCommand, TranscribeClient, StartTranscriptionJobCommandOutput, StartTranscriptionJobCommandInput } from '@aws-sdk/client-transcribe';

export const params = {
    TranscriptionJobName: "JOB_NAME",
    LanguageCode: "LANGUAGE_CODE", // For example, 'en-US'
    MediaFormat: "mp4", // For example, 'wav'
    Media: {
        MediaFileUri: "SOURCE_LOCATION",
      // For example, "https://transcribe-demo.s3-REGION.amazonaws.com/hello_world.wav"
    },
    OutputBucketName: "OUTPUT_BUCKET_NAME"
};

@Injectable()
export class SttService {
    private readonly transcribeClient: TranscribeClient;
    private readonly REGION = "REGION";
    constructor() {
        this.transcribeClient = new TranscribeClient({ region: this.REGION });
    }

    async startTranscriptionJob(params: StartTranscriptionJobCommandInput): Promise<StartTranscriptionJobCommandOutput> {
        try {
            const data = await this.transcribeClient.send(
                new StartTranscriptionJobCommand(params)
            );
            console.log('Transcription job started successfully');
            console.log('Success - put', data);
            return data
        } catch (err) {
        console.log('Error', err);
        }
    }
}