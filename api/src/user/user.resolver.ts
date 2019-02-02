import { Resolver, Query, Args } from "@nestjs/graphql";
import { UserService } from "./user.service";

@Resolver("User")
export class UserResolver {

  constructor(private userService: UserService) {}

  @Query()
  users(@Args("page") page: number) {
    return this.userService.findAllUsers(page);
  }

  @Query()
  user(@Args("username") username: string) {
    return this.userService.findUser(username);
  }

}
