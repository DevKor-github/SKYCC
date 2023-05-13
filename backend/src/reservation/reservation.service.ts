import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { TransportationEntity } from './entity/transportation.entity';
import { Repository, MoreThanOrEqual } from 'typeorm';
import { FindDataReqDto } from './dto/findDataReq.dto';
import { ReservationEntity } from './entity/reservation.entity';
import { FindDataResDto } from './dto/findDataResDto.dto';

@Injectable()
export class ReservationService {
  constructor(
    @InjectRepository(TransportationEntity)
    private readonly transportationRepository: Repository<TransportationEntity>,
    @InjectRepository(ReservationEntity)
    private readonly reservationRepository: Repository<ReservationEntity>,
  ) {}

  async findByData(findDataReqDto: FindDataReqDto) {
    const { departureLocation, arrivalLocation, departureTime } =
      findDataReqDto;

    const transportation = await this.transportationRepository.findOne({
      where: {
        departureLocation,
        arrivalLocation,
        departureTime,
      },
    });
    if (!transportation) {
      // TODO : 유사 데이터 찾아 넘기기
      throw new Error('해당하는 데이터가 없습니다.');
    }
    if (transportation.remainingSeats == 0) {
      // TODO : 유사 데이터 찾아 넘기기
      throw new Error('해당하는 데이터가 없습니다.');
    }

    transportation.remainingSeats -= 1;
    await this.transportationRepository.save(transportation);

    const reservation = new ReservationEntity();
    reservation.transportation = transportation;
    await this.reservationRepository.save(reservation);
  }

  // TODO 유사 데이터 찾는 함수 구현 - HOW? => 출발시간 유사 - 오름차순
  async findSimilarData(findDataReqDto: FindDataReqDto) {
    const { departureLocation, arrivalLocation, departureTime } =
      findDataReqDto;
    const transportations = await this.transportationRepository.find({
      where: {
        departureLocation,
        arrivalLocation,
        departureTime: MoreThanOrEqual(departureTime),
        remainingSeats: MoreThanOrEqual(1),
      },
      order: {
        departureTime: 'ASC',
      },
      take: 3,
    });

    if (transportations.length === 0) {
      // TODO : no data 예외 처리
    }
    const responseDtos = transportations.map(
      (transportation) => new FindDataResDto(transportation),
    );

    return responseDtos;
  }

  // TODO make reservation
  async makeReservation(id: number) {
    const transportation = await this.transportationRepository.findOne({
      where: {
        id,
      },
    });
    if (!transportation) {
      // TODO error
      throw new Error('교통 정보가 없습니다.');
    }
    if (transportation.remainingSeats == 0) {
      // TODO : 유사 데이터 찾아 넘기기
      throw new Error('해당하는 데이터가 없습니다.');
    }

    transportation.remainingSeats -= 1;
    await this.transportationRepository.save(transportation);

    const reservation = new ReservationEntity();
    reservation.transportation = transportation;
    await this.reservationRepository.save(reservation);
  }

  async cancelReservation(id: number) {
    const reservation = await this.reservationRepository.findOne({
      where: {
        id,
      },
    });
    if (!reservation) {
      // TODO error
      throw new Error('예약 정보가 없습니다.');
    }
    reservation.transportation.remainingSeats += 1;
    await this.transportationRepository.save(reservation.transportation);
    await this.transportationRepository.delete(reservation);
  }
}
