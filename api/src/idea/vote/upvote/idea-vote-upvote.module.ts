import { forwardRef, Module } from "@nestjs/common";

import { IdeaVoteUpvoteController } from "./idea-vote-upvote.controller";
import { IdeaVoteUpvoteService } from "./idea-vote-upvote.service";
import { IdeaVoteModule } from "../idea-vote.module";
import { UserService } from "../../../user/user.service";
import { UserAuthenticationRegistrationService } from "../../../user/authentication/registration/user-authentication-registration.service";
import { IdeaVoteUpvoteResolver } from "./idea-vote-upvote.resolver";

@Module({
  imports: [
    forwardRef(() => IdeaVoteModule)
  ],
  controllers: [
    IdeaVoteUpvoteController
  ],
  providers: [
    IdeaVoteUpvoteService,
    UserService,
    UserAuthenticationRegistrationService,
    IdeaVoteUpvoteResolver
  ]
})
export class IdeaVoteUpvoteModule {}
