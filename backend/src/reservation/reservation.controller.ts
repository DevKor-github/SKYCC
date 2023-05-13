import { Body, Controller, Get, Post } from '@nestjs/common';
import { ReservationService } from './reservation.service';

@Controller('reservation')
export class ReservationController {
  constructor(private readonly reservationService: ReservationService) {}

  @Post()
  async getReservation(@Body() item: any) {
    console.log(item);
    return 1;
  }
}
