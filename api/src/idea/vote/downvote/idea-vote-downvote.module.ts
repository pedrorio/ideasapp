import { forwardRef, Module } from "@nestjs/common";

import { IdeaVoteDownvoteController } from "./idea-vote-downvote.controller";
import { IdeaVoteDownvoteService } from "./idea-vote-downvote.service";
import { IdeaVoteModule } from "../idea-vote.module";
import { IdeaVoteDownvoteResolver } from "./idea-vote-downvote.resolver";
import { UserAuthenticationModule } from "../../../user/authentication/user-authentication.module";

@Module({
  imports: [
    forwardRef(
      () => IdeaVoteModule
    ),
    UserAuthenticationModule
  ],
  controllers: [
    IdeaVoteDownvoteController
  ],
  providers: [
    IdeaVoteDownvoteService,
    IdeaVoteDownvoteResolver
  ]
})
export class IdeaVoteDownvoteModule {}
