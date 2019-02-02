import {
  Controller, Get,
  Param, Query
} from "@nestjs/common";
import { UserService } from "./user.service";
import { ApiUseTags, ApiOperation, ApiImplicitQuery, ApiNotFoundResponse, ApiOkResponse } from "@nestjs/swagger";

@Controller("users")
@ApiUseTags("Users")
export class UserController {
  constructor(private userService: UserService) {
  }

  @Get()
  @ApiOperation({ title: "Find all users." })
  @ApiOkResponse({ description: "Found all users." })
  @ApiImplicitQuery({ name: "page", required: false  })
  findAllUsers(@Query("page") page: number) {
    return this.userService.findAllUsers(page);
  }

  @Get(":username")
  @ApiOperation({ title: "Find specific user." })
  @ApiOkResponse({ description: "Found specific user." })
  @ApiNotFoundResponse({ description: "Specific user was not found." })
  findUser(@Param("username") username: string) {
    return this.userService.findUser(username);
  }

}
