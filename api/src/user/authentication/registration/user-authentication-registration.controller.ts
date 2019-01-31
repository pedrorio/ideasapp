import {
  Body, Controller,
  Post,
  UsePipes
} from "@nestjs/common";
import { UserAuthenticationRegistrationService } from "./user-authentication-registration.service";
import { ValidatorPipe } from "../../../shared/validator.pipe";
import { UserDTO } from "../../user.dto";

@Controller("auth")
export class UserAuthenticationRegistrationController {
  constructor(
    private userAuthenticationRegistrationService: UserAuthenticationRegistrationService,
  ) {}

  @Post("register")
  @UsePipes(ValidatorPipe)
  createRegistration(@Body() data: UserDTO) {
    return this.userAuthenticationRegistrationService.createRegistration(data);
  }
}
