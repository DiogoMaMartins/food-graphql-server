import { Resolver,Query,Mutation,Arg } from "type-graphql";
import { ReservationProduct } from '../../entity/ReservationProduct';
import { Reservation } from '../../entity/Reservation';
import { Product } from '../../entity/Product';

import { getRepository } from "typeorm";




@Resolver()
  export class ReservationProductResolver{

    @Query(() => String)
    async testReservationQuery(){
      return "reservation Query";
    }

    @Mutation(() => Reservation)
    async createReservation(
      @Arg("productId") productId:string,
      @Arg("quantity") quantity:number,
      @Arg("date") date:string,
    ){

      const productById = await getRepository(Product)
        .createQueryBuilder("product")
        .where("product.id = :id", {id:productId})
        .getOne();

      const newReservationProduct = await  ReservationProduct.create({
        product:productById,
        quantity,
      })

      //and now i create the transaction

      const reservation = await Reservation.create({
        date,
        reservationProducts:newReservationProduct
      }).save()

      return reservation



    }

  }
