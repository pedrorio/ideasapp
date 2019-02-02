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
import {
  ApiUseTags,
  ApiBearerAuth,
  ApiOperation,
  ApiOkResponse,
  ApiNotFoundResponse,
  ApiForbiddenResponse,
  ApiBadRequestResponse
} from "@nestjs/swagger";

@Controller("auth")
@ApiUseTags("User Authentication Sessions")
export class UserAuthenticationSessionController {
  constructor(
    private userAuthenticationSessionService: UserAuthenticationSessionService,
    private userService: UserService
  ) {
  }

  @Get("me")
  @UseGuards(UserAuthenticationGuard)
  @ApiOperation({ title: "Find the current user." })
  @ApiBearerAuth()
  @ApiOkResponse({ description: "Found current user." })
  @ApiNotFoundResponse({ description: "Current user not found." })
  @ApiForbiddenResponse({ description: "Invalid token or forbidden." })
  findSession(@User("username") username: string) {
    return this.userService.findUser(username);
  }

  @Post("login")
  @UsePipes(ValidatorPipe)
  @ApiOperation({ title: "Create user session." })
  @ApiOkResponse({ description: "Created user session." })
  @ApiBadRequestResponse({description: "UserDTO validation failed or credentials are invalid."})
  createSession(@Body() data: UserDTO) {
    return this.userAuthenticationSessionService.createSession(data);
  }
}
