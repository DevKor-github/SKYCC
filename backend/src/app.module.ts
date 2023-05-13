import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Uploads3Module } from './uploads3/uploads3.module';

@Module({
  imports: [Uploads3Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
