import { Resolver,Query,Arg } from "type-graphql";
import { Reservation } from "../../entity/Reservation";
import { getRepository } from "typeorm";

@Resolver(Reservation)
  export class GetReservationsResolver{
    @Query(() => [Reservation])
    async getListOfReservations(){
      const reservation = await getRepository(Reservation)
        .createQueryBuilder("reservation")
        .leftJoinAndSelect("reservation.reservationProducts", "reservationProducts")
        .leftJoinAndSelect("reservationProducts.product", "product")
        .getMany();
        return reservation
    }


    @Query(() => Reservation)
    async getReservationById(@Arg("id") id:string){

      let reservation = await getRepository(Reservation)
        .createQueryBuilder("reservation")
        .leftJoinAndSelect("reservation.reservationProducts", "reservationProducts")
        .leftJoinAndSelect("reservationProducts.product", "product")
        .where("reservation.id = :id", {id:id})
        .getOne();

      return await reservation
    }
  }
