import { Controller, Get, Param, Query } from "@nestjs/common";
import { CommentService } from "./comment.service";
import { ApiUseTags, ApiOperation, ApiOkResponse, ApiImplicitQuery, ApiNotFoundResponse } from "@nestjs/swagger";

@Controller("comments")
@ApiUseTags("Comments")
export class CommentController {

  constructor(private commentService: CommentService) {
  }

  @Get()
  @ApiOperation({ title: "Find all comments." })
  @ApiOkResponse({ description: "Found all comments." })
  @ApiImplicitQuery({ name: "page", required: false })
  findAllComments(@Query("page") page: number) {
    return this.commentService.findAllComments(page);
  }

  @Get(":id")
  @ApiOperation({ title: "Find specific comment." })
  @ApiOkResponse({ description: "Found specific comment." })
  @ApiNotFoundResponse({ description: "Specific comment was not found." })
  findComment(@Param("id") id: string) {
    return this.commentService.findComment(id);
  }

}
