import { Resolver, Args, Mutation, Context } from "@nestjs/graphql";
import { IdeaVoteDownvoteService } from "./idea-vote-downvote.service";
import { UseGuards } from "@nestjs/common";
import { UserAuthenticationRO } from "../../../user/authentication/user-authentication.ro";
import { UserAuthenticationGuard } from "../../../user/authentication/user-authentication.guard";

@Resolver("Idea")
export class IdeaVoteDownvoteResolver {

  constructor(private ideaVoteDownvoteService: IdeaVoteDownvoteService) {
  }

  @Mutation()
  @UseGuards(UserAuthenticationGuard)
  downvoteIdea(
    @Args("id")id: string,
    @Context("user") user: UserAuthenticationRO
  ) {
    const userId = user.id;
    return this.ideaVoteDownvoteService.downvoteIdea(id, userId);
  }
}
