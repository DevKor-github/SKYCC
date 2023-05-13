import { Module } from '@nestjs/common';
import { Uploads3Service } from './uploads3.service';
import { Uploads3Controller } from './uploads3.controller';

@Module({
  controllers: [Uploads3Controller],
  providers: [Uploads3Service]
})
export class Uploads3Module {}
