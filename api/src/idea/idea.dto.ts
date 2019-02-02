import { IsString } from "class-validator";
import { ApiModelProperty } from "@nestjs/swagger";

export class IdeaDTO {
  @IsString()
  @ApiModelProperty()
  idea: string;

  @IsString()
  @ApiModelProperty()
  description: string;
}
