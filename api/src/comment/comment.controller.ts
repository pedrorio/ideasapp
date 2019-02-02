import { Controller, Get, Logger, Param, Query } from "@nestjs/common";
import { CommentService } from "./comment.service";

@Controller("comments")
export class CommentController {

  constructor(private commentService: CommentService) {
  }

  @Get()
  findAllComments(@Query("page") page: number) {
    return this.commentService.findAllComments(page);
  }

  @Get(":id")
  findComment(@Param("id") id: string) {
    return this.commentService.findComment(id);
  }

}
