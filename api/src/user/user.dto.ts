import { IsNotEmpty } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class UserDTO {

  @IsNotEmpty()
  @ApiModelProperty()
  username: string;

  @IsNotEmpty()
  @ApiModelProperty()
  password: string;
}
