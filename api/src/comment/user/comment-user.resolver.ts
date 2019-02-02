import { Resolver, Query, Args } from "@nestjs/graphql";
import { CommentUserService } from "./comment-user.service";

@Resolver("Comment")
export class CommentUserResolver {

  constructor(private commentUserService: CommentUserService) {
  }

  @Query()
  userComments(
    @Args("id") userId: string,
    @Args("page") page: number
  ) {
    return this.commentUserService.findAllUserComments(userId, page);
  }

}
