import { forwardRef, Module } from "@nestjs/common";

import { IdeaVoteDownvoteController } from "./idea-vote-downvote.controller";
import { IdeaVoteDownvoteService } from "./idea-vote-downvote.service";
import { IdeaVoteModule } from "../idea-vote.module";
import { UserService } from "../../../user/user.service";
import { UserAuthenticationRegistrationService } from "../../../user/authentication/registration/user-authentication-registration.service";
import { IdeaVoteDownvoteResolver } from "./idea-vote-downvote.resolver";

@Module({
  imports: [
    forwardRef(() => IdeaVoteModule)
  ],
  controllers: [
    IdeaVoteDownvoteController
  ],
  providers: [
    IdeaVoteDownvoteService,
    UserService,
    UserAuthenticationRegistrationService,
    IdeaVoteDownvoteResolver
  ]
})
export class IdeaVoteDownvoteModule {}
