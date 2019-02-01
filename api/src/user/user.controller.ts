import {
  Controller, Get,
  Param, Query
} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAllUsers(@Query("page") page: number) {
    return this.userService.findAllUsers(page);
  }

  @Get(":username")
  findUser(@Param("username") username: string) {
    return this.userService.findUser(username);
  }

}
