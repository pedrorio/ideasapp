import { Resolver, Mutation, Args, Context } from "@nestjs/graphql";
import { IdeaVoteUpvoteService } from "./idea-vote-upvote.service";
import { UserAuthenticationRO } from "../../../user/authentication/user-authentication.ro";

@Resolver("Idea")
export class IdeaVoteUpvoteResolver {

  constructor(private ideaVoteUpvoteService: IdeaVoteUpvoteService) {
  }

  @Mutation()
  upvoteIdea(
    @Args("id")id: string,
    @Context("user") user: UserAuthenticationRO
  ) {
    const userId = user.id;
    return this.ideaVoteUpvoteService.upvoteIdea(id, userId);
  }
}
