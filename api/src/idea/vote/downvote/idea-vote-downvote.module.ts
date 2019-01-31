import { forwardRef, Module } from "@nestjs/common";

import { IdeaVoteDownvoteController } from "./idea-vote-downvote.controller";
import { IdeaVoteDownvoteService } from "./idea-vote-downvote.service";
import { IdeaVoteModule } from "../idea-vote.module";

@Module({
  imports: [
    forwardRef(() => IdeaVoteModule)
  ],
  controllers: [IdeaVoteDownvoteController],
  providers: [IdeaVoteDownvoteService]
})
export class IdeaVoteDownvoteModule {}
