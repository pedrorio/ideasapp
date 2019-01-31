import {
  Controller, Get,
  Param
} from "@nestjs/common";
import { UserService } from "./user.service";

@Controller("users")
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  findAllUsers() {
    return this.userService.findAllUsers();
  }

  @Get(":username")
  findUser(@Param("username") username: string) {
    return this.userService.findUser(username);
  }

}
