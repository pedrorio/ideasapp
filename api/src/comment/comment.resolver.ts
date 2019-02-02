import { Resolver, Query, Args } from "@nestjs/graphql";
import { CommentService } from "./comment.service";

@Resolver("Comment")
export class CommentResolver {

  constructor(private commentService: CommentService) {
  }

  @Query()
  comments(@Args("page") page: number) {
    return this.commentService.findAllComments(page);
  }

  @Query()
  comment(@Args("id") id: string) {
    return this.commentService.findComment(id);
  }

}
