import {
  Body, Controller, Get,
  Post, UseGuards,
  UsePipes
} from "@nestjs/common";
import { UserAuthenticationSessionService } from "./user-authentication-session.service";
import { User } from "../../user.decorator";
import { UserService } from "../../user.service";
import { ValidatorPipe } from "../../../shared/validator.pipe";
import { UserDTO } from "../../user.dto";
import { UserAuthenticationGuard } from "../user-authentication.guard";

@Controller("auth")
export class UserAuthenticationSessionController {
  constructor(
    private userAuthenticationSessionService: UserAuthenticationSessionService,
    private userService: UserService
  ) {}

  @Get("me")
  @UseGuards(UserAuthenticationGuard)
  findSession(@User("username") username: string) {
    return this.userService.findUser(username);
  }

  @Post("login")
  @UsePipes(ValidatorPipe)
  createSession(@Body() data: UserDTO) {
    return this.userAuthenticationSessionService.createSession(data);
  }
}
