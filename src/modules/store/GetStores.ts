import { Resolver, Query,Arg} from "type-graphql";
import { Store } from "../../entity/Store";
import { Product } from "../../entity/Product";

import {getRepository} from "typeorm";

@Resolver()
  export class GetStoresResolver {
    @Query(() => [Store])
    async getListOfStores(){
      const stores = await getRepository(Store)
                .createQueryBuilder("stores")
                .getMany();

                return await stores
    }

   @Query(() => Store)
    async getStoreById(@Arg("id") id:string){

          let store =  await getRepository(Store)
               .createQueryBuilder("store")
               .where("store.id = :id", { id: id})
               .leftJoinAndSelect("store.products", "product")
               .getOne();

          console.log("store",store)
         return await store
    }



}
