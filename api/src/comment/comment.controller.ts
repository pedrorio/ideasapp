import { Body, Controller, Delete, Get, Logger, Param, Patch, Post, Query, UseGuards, UsePipes } from "@nestjs/common";
import { CommentDTO } from "./comment.dto";
import { ValidatorPipe } from "./../shared/validator.pipe";
import { AuthenticationGuard } from "./../shared/authentication.guard";
import { User } from "./../user/user.decorator";
import { CommentService } from "./comment.service";

@Controller("comments")
export class CommentController {
  private logger = new Logger("CommentController");

  constructor(private commentService: CommentService) {
  }

  private logData(options: any) {
    options.id && this.logger.log(`COMMENT ${JSON.stringify(options.id)}`);
    options.data && this.logger.log(`DATA ${JSON.stringify(options.body)}`);
    options.userId && this.logger.log(`USER ${JSON.stringify(options.userId)}`);
  }

  @Get()
  findAllComments(@Query("page") page: number) {
    return this.commentService.findAllComments(page);
  }

  @Get(":id")
  findComment(@Param("id") id: string) {
    return this.commentService.findComment(id);
  }

  @Post()
  @UsePipes(ValidatorPipe)
  @UseGuards(AuthenticationGuard)
  createComment(
    @User("id") userId: string,
    @Body() data: CommentDTO
  ) {
    this.logData({ userId, data });
    return this.commentService.createComment(userId, data);
  }

  @Patch(":id")
  @UsePipes(ValidatorPipe)
  @UseGuards(AuthenticationGuard)
  updateComment(
    @Param("id") id: string,
    @User("id") userId: string,
    @Body() data: Partial<CommentDTO>
  ) {
    this.logData({ id, userId, data });
    return this.commentService.updateComment(id, userId, data);
  }

  @Delete(":id")
  @UseGuards(AuthenticationGuard)
  deleteComment(
    @Param("id") id: string,
    @User("id") userId: string,
  ) {
    this.logData({ id, userId });
    return this.commentService.deleteComment(id, userId);
  }

}
