import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Uploads3Module } from './uploads3/uploads3.module';
import { SttService } from './stt/stt.service';

@Module({
  imports: [Uploads3Module],
  controllers: [AppController],
  providers: [AppService, SttService],
})
export class AppModule {}
