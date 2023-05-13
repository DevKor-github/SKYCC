import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ChatGptService } from './chatgpt/chatgpt.service';
import { ConfigModule } from '@nestjs/config'

@Module({
  imports: [ConfigModule.forRoot({
    cache: true,
    isGlobal: true,
  })],
  controllers: [AppController],
  providers: [AppService, ChatGptService],
})
export class AppModule {}
