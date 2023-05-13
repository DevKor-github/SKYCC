import { Module } from '@nestjs/common';
import { ChatGptService } from './chatgpt/chatgpt.service';
import { ConfigModule } from '@nestjs/config';
import { ReservationModule } from './reservation/reservation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SttService } from './stt/stt.service';
import { AppController } from './app.controller';
import { Uploads3Service } from './uploads3/uploads3.service';
import { Gets3Service } from './gets3/gets3.service';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: '.env', isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: Number(process.env.DB_PORT),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      autoLoadEntities: true,
      synchronize: true,
    }),
    ReservationModule,
  ],
  controllers: [AppController],
  providers: [ChatGptService, SttService, Uploads3Service, Gets3Service],
})
export class AppModule {}
