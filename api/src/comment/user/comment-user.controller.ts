import { Controller, Get, Param, Query } from "@nestjs/common";
import { CommentUserService } from "./comment-user.service";

@Controller("users/:userId")
export class CommentUserController {

  constructor(private commentUserService: CommentUserService) {
  }

  @Get("comments")
  findAllUserComments(
    @Param("userId") userId: string,
    @Query("page") page: number
  ) {
    return this.commentUserService.findAllUserComments(userId, page);
  }

}
