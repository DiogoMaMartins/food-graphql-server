import { Resolver, Query,Arg} from "type-graphql";
import { Product } from "../../entity/Product";
import {getRepository} from "typeorm";



@Resolver(Product)
  export class GetProductsResolver {
    @Query(() => [Product])
    async getProducts(){
      const listOfProducts  = await getRepository(Product)
      .createQueryBuilder("product")
      .leftJoinAndSelect("product.store", "store")
      .getMany();

      console.log(listOfProducts)
                return await listOfProducts
    }





}
