import { Resolver, Mutation, Arg } from "type-graphql";
import { Store } from "../../entity/Store";
import { RegisterStore } from "./register/RegisterStore";

@Resolver()
export class RegisterStoreResolver {

  @Mutation(() => Store)
  async createStore(@Arg("input")
  {
    shopName,
    street,
    number,
    postalCode,
    city,
  }: RegisterStore): Promise<Store> {

    const store = await Store.create({
      shopName,
      street,
      number,
      postalCode,
      city,
    }).save();


    return store;
  }
}
