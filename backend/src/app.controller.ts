import {
  Controller,
  Delete,
  Param,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Uploads3Service } from './uploads3/uploads3.service';
import { SttService } from './stt/stt.service';
import { FileInterceptor } from '@nestjs/platform-express';
import { Gets3Service } from './gets3/gets3.service';
import { v4 as uuidv4 } from 'uuid';
import { StartTranscriptionJobCommandInput } from '@aws-sdk/client-transcribe';
import { ChatGptService } from './chatgpt/chatgpt.service';
import { ReservationService } from './reservation/reservation.service';
import { FindDataReqDto } from './reservation/dto/findDataReq.dto';
import { STATUS_CODES } from 'http';
@Controller('')
export class AppController {
  constructor(
    private readonly uploads3Service: Uploads3Service,
    private readonly sttService: SttService,
    private readonly gets3Service: Gets3Service,
    private readonly gptService: ChatGptService,
    private readonly reservationService: ReservationService,
  ) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    const url = await this.uploads3Service.upload(file);
    const uid = uuidv4();
    const params: StartTranscriptionJobCommandInput = {
      TranscriptionJobName: uid,
      LanguageCode: 'ko-KR',
      MediaFormat: 'mp4',
      Media: {
        MediaFileUri: url,
      },
      OutputBucketName: 's3-skycc-stt',
    };
    await this.sttService.startTranscriptionJob(params);
    const data = await this.gets3Service.gets3(uid + '.json');
    const result = await this.gptService.complete(data);
    const time = new Date(result.date + ' ' + result.time);
    const dto = new FindDataReqDto(time, result.departure, result.destination);
    try {
      const data = await this.reservationService.findByData(dto);
      return data;
    } catch (err) {
      const sim = await this.reservationService.findSimilarData(dto);
      return sim;
    }
  }

  @Post('/reservation/:id')
  async makeReservation(@Param('id') id: number) {
    await this.reservationService.makeReservation(id);
    return STATUS_CODES[201];
  }

  @Delete('/reservation/:id')
  async deleteReservation(@Param('id') id: number) {
    await this.reservationService.cancelReservation(id);
    return STATUS_CODES[200];
  }
}
