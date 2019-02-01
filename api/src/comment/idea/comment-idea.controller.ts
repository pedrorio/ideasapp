import { Controller, Get, Logger, Param, Query } from "@nestjs/common";
import { CommentIdeaService } from "./comment-idea.service";

@Controller("comments")
export class CommentIdeaController {
  private logger = new Logger("CommentIdeaController");

  constructor(private commentIdeaService: CommentIdeaService) {
  }

  private logData(options: any) {
    options.id && this.logger.log(`COMMENT ${JSON.stringify(options.id)}`);
    options.data && this.logger.log(`DATA ${JSON.stringify(options.body)}`);
    options.userId && this.logger.log(`USER ${JSON.stringify(options.userId)}`);
  }

  @Get("idea/:id")
  findAllCommentsByUsers(@Param("id") id: string, @Query("page") page: number) {
    return this.commentIdeaService.findAllCommentsByIdea(id, page);
  }

}
