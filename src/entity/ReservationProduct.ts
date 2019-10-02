import { Entity, PrimaryGeneratedColumn, Column, BaseEntity,OneToOne,JoinColumn } from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";

import { Product } from './Product';

@ObjectType()
@Entity()
export class ReservationProduct extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id:number;

  @Field()
  @OneToOne(() => Product)
  @JoinColumn()
  product: Product

  @Field()
  @Column()
  quantity:number;

}
