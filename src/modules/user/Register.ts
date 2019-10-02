import { Resolver, Query } from "type-graphql";
//import { User } from "../../entity/User";
//import { RegisterStore } from "./register/RegisterStore";

@Resolver()
export class RegisterUserResolver {
  @Query(() => String)
  async hello() {
    return "Hello World!";
  }
}
