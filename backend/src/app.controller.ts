import {
  Controller,
  Get,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Uploads3Service } from './uploads3/uploads3.service';
import { SttService } from './stt/stt.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { StartTranscriptionJobCommandInput } from '@aws-sdk/client-transcribe';
import { Gets3Service } from './gets3/gets3.service';

@Controller('')
export class AppController {
  constructor(
    private readonly uploads3Service: Uploads3Service,
    private readonly sttService: SttService,
    private readonly gets3Service: Gets3Service
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
  @Get('')
  async getStt(){
    await this.gets3Service.gets3();
  }
}
