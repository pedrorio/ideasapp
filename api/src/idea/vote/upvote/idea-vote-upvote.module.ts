import { forwardRef, Module } from "@nestjs/common";

import { IdeaVoteUpvoteController } from "./idea-vote-upvote.controller";
import { IdeaVoteUpvoteService } from "./idea-vote-upvote.service";
import { IdeaVoteModule } from "../idea-vote.module";
import { IdeaVoteUpvoteResolver } from "./idea-vote-upvote.resolver";
import { UserAuthenticationModule } from "../../../user/authentication/user-authentication.module";

@Module({
  imports: [
    forwardRef(
      () => IdeaVoteModule
    ),
    UserAuthenticationModule
  ],
  controllers: [
    IdeaVoteUpvoteController
  ],
  providers: [
    IdeaVoteUpvoteService,
    IdeaVoteUpvoteResolver
  ]
})
export class IdeaVoteUpvoteModule {}
