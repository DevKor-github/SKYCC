import { Module } from '@nestjs/common';
import { ChatGptService } from './chatgpt/chatgpt.service';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { SttService } from './stt/stt.service';
import { AppController } from './app.controller';
import { Uploads3Service } from './uploads3/uploads3.service';
import { Gets3Service } from './gets3/gets3.service';
import { ReservationService } from './reservation/reservation.service';
import { TransportationEntity } from './reservation/entity/transportation.entity';
import { ReservationEntity } from './reservation/entity/reservation.entity';
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
    TypeOrmModule.forFeature([TransportationEntity, ReservationEntity]),
  ],
  controllers: [AppController],
  providers: [
    ChatGptService,
    SttService,
    Uploads3Service,
    Gets3Service,
    ReservationService,
  ],
})
export class AppModule {}
