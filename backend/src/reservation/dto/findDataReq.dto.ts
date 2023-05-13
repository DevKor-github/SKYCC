import { IsDateString, IsString } from 'class-validator';

export class FindDataReqDto {
  @IsDateString()
  departureTime: Date;
  @IsString()
  departureLocation: string;
  @IsString()
  arrivalLocation: string;
}
