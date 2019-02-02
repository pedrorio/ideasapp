import { Resolver, Mutation, Args, Context } from "@nestjs/graphql";
import { UserDTO } from "../../user.dto";
import { UserAuthenticationSessionService } from "./user-authentication-session.service";
import { Query } from "@nestjs/common";
import { UserAuthenticationRO } from "../user-authentication.ro";
import { UserService } from "../../user.service";

@Resolver("User")
export class UserAuthenticationSessionResolver {

  constructor(
    private userAuthenticationSessionService: UserAuthenticationSessionService,
    private userService: UserService
  ) {}

  @Mutation()
  loginUser(@Args("data") data: UserDTO) {
    return this.userAuthenticationSessionService.createSession(data);
  }

  @Query()
  findMe(
    @Context("user") { username }: UserAuthenticationRO
  ) {
    return this.userService.findUser(username);
  }

}
