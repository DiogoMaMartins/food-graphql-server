import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,JoinColumn,OneToOne } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { ReservationProduct } from "./ReservationProduct";

@ObjectType()
@Entity()
export class Reservation extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id:number;

  @Field()
  @Column()
  date:string;


  @Field()
  @OneToOne(() => ReservationProduct,{
    cascade: true,
  })
  @JoinColumn()
  reservationProducts: ReservationProduct
}
