import { IsDateString, IsString } from 'class-validator';

export class FindDataReqDto {
  constructor(
    departureTime: Date,
    departureLocation: string,
    arrivalLocation: string,
  ) {
    this.departureTime = departureTime;
    this.departureLocation = departureLocation;
    this.arrivalLocation = arrivalLocation;
  }

  @IsDateString()
  departureTime: Date;
  @IsString()
  departureLocation: string;
  @IsString()
  arrivalLocation: string;
}
