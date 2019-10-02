import {Entity, PrimaryGeneratedColumn, Column, OneToMany,BaseEntity} from "typeorm";
import { ObjectType, Field, ID } from "type-graphql";
import {Product} from "./Product";


@ObjectType()
@Entity()
export class Store extends BaseEntity  {
    @Field(() => ID)
    @PrimaryGeneratedColumn()
    id: number;

    @Field()
    @Column("text", { unique: true })
    shopName: string;

    @Field()
    @Column()
    street: string;

    @Field()
    @Column()
    number: number;

    @Field()
    @Column()
    postalCode: number;

    @Field()
    @Column()
    city: string;

    @OneToMany(type => Product, product => product.store,{
    cascade: true,
  })
    products: Product[];

   //@OneToMany(() => Product,product => product.store)
   //product:Product;

}
