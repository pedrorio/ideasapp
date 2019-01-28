import {
  Body,
  ClassSerializerInterceptor,
  Controller,
  Get,
  Logger,
  Post,
  UseInterceptors,
  UsePipes
} from "@nestjs/common";
import { UserService } from "./user.service";
import { UserDTO } from "./user.dto";
import { ValidatorPipe } from "../shared/validator.pipe";

@Controller("users")
export class UserController {
  // private logger = new Logger("UserController");

  constructor(private userService: UserService) {}

  @Get()
  @UseInterceptors(ClassSerializerInterceptor)
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get("me")
  @UseInterceptors(ClassSerializerInterceptor)
  me() {
    return this.userService.me();
  }

  @Post("login")
  @UsePipes(ValidatorPipe)
  login(@Body() data: UserDTO) {
    return this.userService.login(data);
  }

  @Post("register")
  @UsePipes(ValidatorPipe)
  register(@Body() data: UserDTO) {
    return this.userService.register(data);
  }
}
