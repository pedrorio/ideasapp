import { Resolver, Mutation, Args } from "@nestjs/graphql";
import { UserAuthenticationRegistrationService } from "./user-authentication-registration.service";
import { UserDTO } from "../../user.dto";

@Resolver("User")
export class UserAuthenticationRegistrationResolver {

  constructor(private userAuthenticationRegistrationService: UserAuthenticationRegistrationService) {}

  @Mutation()
  registerUser(@Args("data") data: UserDTO) {
    return this.userAuthenticationRegistrationService.createRegistration(data);
  }

}
