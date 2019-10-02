import {Entity, PrimaryGeneratedColumn, Column, ManyToOne,BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import { Store } from './Store';

@ObjectType()
@Entity()
export class Product extends BaseEntity {
  @Field(() => ID)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column()
  price: number;

  @Field()
  @Column("text", { unique: true })
  productName: string;

  @Field()
  @Column()
  description: string;

  @ManyToOne(type => Store, store => store.products)
  store: Store;
  //@ManyToOne(() => Store,store => store.product)
  //store:Store;
}
