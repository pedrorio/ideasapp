import { IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class CommentDTO {
  @IsString()
  @ApiModelProperty()
  comment: string;
}
