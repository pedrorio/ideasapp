import { Resolver, Query, Args, Mutation, Context } from "@nestjs/graphql";
import { CommentIdeaService } from "./comment-idea.service";
import { UserAuthenticationRO } from "../../user/authentication/user-authentication.ro";
import { CommentDTO } from "../comment.dto";
import { UseGuards } from "@nestjs/common";
import { UserAuthenticationGuard } from "../../user/authentication/user-authentication.guard";

@Resolver("Comment")
export class CommentIdeaResolver {

  constructor(private commentIdeaService: CommentIdeaService) {
  }

  @Query()
  ideaComments(
    @Args("ideaId") ideaId: string,
    @Args("page") page: number
  ) {
    return this.commentIdeaService.findAllIdeaComments(ideaId, page);
  }

  @Mutation()
  @UseGuards(UserAuthenticationGuard)
  createIdeaComment(
    @Context("user") user: UserAuthenticationRO,
    @Args("ideaId") ideaId: string,
    @Args("data") data: CommentDTO
  ) {
    const userId = user.id;
    return this.commentIdeaService.createIdeaComment(ideaId, userId, data);
  }

  @Mutation()
  @UseGuards(UserAuthenticationGuard)
  updateIdeaComment(
    @Context("user") user: UserAuthenticationRO,
    @Args("ideaId") ideaId: string,
    @Args("commentId") commentId: string,
    @Args("data") data: CommentDTO
  ) {
    const userId = user.id;
    return this.commentIdeaService.updateIdeaComment(ideaId, commentId, userId, data);
  }

  @Mutation()
  @UseGuards(UserAuthenticationGuard)
  deleteIdeaComment(
    @Context("user") user: UserAuthenticationRO,
    @Args("ideaId") ideaId: string,
    @Args("commentId") commentId: string,
  ) {
    const userId = user.id;
    return this.commentIdeaService.deleteIdeaComment(ideaId, commentId, userId);
  }

}
