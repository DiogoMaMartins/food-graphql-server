import { Length } from 'class-validator';
import { Field, InputType } from "type-graphql";
import { isStoreAlreadyExists } from './isStoreAlreadyExists';

@InputType()
export class RegisterStore{
  @Field()
  @Length(1,255)
  @isStoreAlreadyExists({message: "shopName already in the list"})
  shopName:string;

  @Field()
  @Length(1,255)
  street: string;

  @Field()
  number: number;

  @Field()
  postalCode: number;

  @Field()
  @Length(1,255)
  city: string;

}
