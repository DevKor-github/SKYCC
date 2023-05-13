import { IsDateString, IsString, IsNumber } from 'class-validator';
import { TransportationEntity } from '../entity/transportation.entity';
import { ReservationEntity } from '../entity/reservation.entity';

export class FindDataResDto {
  constructor(transportationEntity: TransportationEntity) {
    this.departureLocation = transportationEntity.departureLocation;
    this.arrivalLocation = transportationEntity.arrivalLocation;
    this.departureTime = transportationEntity.departureTime;
    this.arrivalTime = transportationEntity.arrivalTime;
    this.price = transportationEntity.price;
    this.id = transportationEntity.id;
  }

  @IsDateString()
  departureTime: Date;
  @IsString()
  departureLocation: string;
  @IsString()
  arrivalLocation: string;
  @IsDateString()
  arrivalTime: Date;

  @IsNumber()
  price: number;

  @IsNumber()
  id: number;
}
