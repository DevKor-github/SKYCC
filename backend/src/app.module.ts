import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptService } from './chatgpt/chatgpt.service';

@Module({
  imports: [],
  controllers: [AppController],
  providers: [AppService, ChatGptService],
})
export class AppModule {}
