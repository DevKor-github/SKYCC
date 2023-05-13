import { Module } from '@nestjs/common';
import { ChatGptService } from './chatgpt/chatgpt.service';
import { ConfigModule } from '@nestjs/config';
import { ReservationModule } from './reservation/reservation.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Uploads3Module } from './uploads3/uploads3.module';
import { SttService } from './stt/stt.service';

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
    Uploads3Module,
  ],
  controllers: [],
  providers: [ChatGptService, SttService],
})
export class AppModule {}
