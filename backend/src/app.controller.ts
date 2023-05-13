import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Uploads3Service } from './uploads3/uploads3.service';
import { SttService } from './stt/stt.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { StartTranscriptionJobCommandInput } from '@aws-sdk/client-transcribe';

@Controller('')
export class AppController {
  constructor(
    private readonly uploads3Service: Uploads3Service,
    private readonly sttService: SttService,
  ) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const url = await this.uploads3Service.upload(file);
    const params: StartTranscriptionJobCommandInput = {
      TranscriptionJobName: 'transcription',
      LanguageCode: 'ko-KR',
      MediaFormat: 'mp4',
      Media: {
        MediaFileUri: url,
      },
      OutputBucketName: 'transcribe-output-bucket',
    };
    const result = this.sttService.startTranscriptionJob(params);
    return result;
  }
}
