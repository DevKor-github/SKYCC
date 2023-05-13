import {
  Controller,
  Post,
  UploadedFile,
  UseInterceptors,
} from '@nestjs/common';
import { Uploads3Service } from './uploads3.service';
import { FileInterceptor } from '@nestjs/platform-express';

@Controller('uploads3')
export class Uploads3Controller {
  constructor(private readonly uploads3Service: Uploads3Service) {}

  @Post('')
  @UseInterceptors(FileInterceptor('file'))
  async uploadFile(@UploadedFile() file: Express.Multer.File) {
    console.log(file);
    const url = await this.uploads3Service.upload(file);
    return url;
  }
}
