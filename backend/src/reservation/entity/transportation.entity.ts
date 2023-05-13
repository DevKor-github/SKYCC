import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('transportation')
export class TransportationEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'remaining_seats' })
  remainingSeats: number;

  @Column({ name: 'departure_time' })
  departureTime: Date;

  @Column({ name: 'arrival_time' })
  arrivalTime: Date;

  @Column({ name: 'departure_location' })
  departureLocation: string;

  @Column({ name: 'arrival_location' })
  arrivalLocation: string;

  @Column({ name: 'price' })
  price: number;
}

// TODO
/****
 * 차종
 * 운임
 * mock -> real data
 */
