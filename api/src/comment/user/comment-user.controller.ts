import { Controller, Get, Logger, Param, Query } from "@nestjs/common";
import { CommentUserService } from "./comment-user.service";

@Controller("comments")
export class CommentUserController {
  private logger = new Logger("CommentUserController");

  constructor(private commentUserService: CommentUserService) {
  }

  private logData(options: any) {
    options.id && this.logger.log(`COMMENT ${JSON.stringify(options.id)}`);
    options.data && this.logger.log(`DATA ${JSON.stringify(options.body)}`);
    options.userId && this.logger.log(`USER ${JSON.stringify(options.userId)}`);
  }

  @Get("user/:id")
  findAllCommentsByUser(@Param("id") id: string, @Query("page") page: number) {
    return this.commentUserService.findAllCommentsByUser(id, page);
  }

}
