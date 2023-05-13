import { Module } from '@nestjs/common';
import { ReservationController } from './reservation.controller';
import { ReservationService } from './reservation.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportationEntity } from './entity/transportation.entity';
import { ReservationEntity } from './entity/reservation.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([TransportationEntity, ReservationEntity]),
  ],
  controllers: [ReservationController],
  providers: [ReservationService],
})
export class ReservationModule {}
