import { Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { TransportationEntity } from './transportation.entity';

@Entity('reservation')
export class ReservationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => TransportationEntity)
  transportation: TransportationEntity;
}

// TODO
/****
 * 예약에 더 필요한 내용들 ?
 */
