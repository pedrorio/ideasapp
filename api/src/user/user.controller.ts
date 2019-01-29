import {
  Body, Controller, Get,
  Param, Post, UseGuards,
  UsePipes
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ValidatorPipe } from "../shared/validator.pipe";
import { AuthGuard } from "../shared/auth.guard";
import { User } from "./user.decorator";
import { UserDTO } from "./user.dto";

@Controller()
export class UserController {
  constructor(private userService: UserService) {}

  @Get("users")
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get("users/:username")
  findUser(@Param("username") username: string) {
    return this.userService.findUser(username);
  }
  
  @Get("auth/me")
  @UseGuards(AuthGuard)
  me(@User("username") username: string) {
    return this.userService.findUser(username);
  }

  @Post("auth/login")
  @UsePipes(ValidatorPipe)
  login(@Body() data: UserDTO) {
    return this.userService.login(data);
  }

  @Post("auth/register")
  @UsePipes(ValidatorPipe)
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }
}
