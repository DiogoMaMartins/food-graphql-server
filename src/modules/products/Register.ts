import { Resolver, Query,Mutation,Arg } from "type-graphql";
import { Product } from "../../entity/Product";
import { Store } from "../../entity/Store";
import {getRepository} from "typeorm";

@Resolver()
export class RegisterProductResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }

  @Mutation(() => Product)
  async createProduct(
    @Arg("price") price:number,
    @Arg("productName") productName:string,
    @Arg("description") description:string,
    @Arg("storeId") storeId:string,
){

  const storeById = await getRepository(Store)
        .createQueryBuilder("store")
        .where("store.id = :id", { id: storeId})
        .getOne();

  const newProduct = await Product.create({
    price,
    productName,
    description,
    store:storeById
  }).save()


  return newProduct
}


}
