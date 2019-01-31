import { forwardRef, Module } from "@nestjs/common";

import { IdeaVoteUpvoteController } from "./idea-vote-upvote.controller";
import { IdeaVoteUpvoteService } from "./idea-vote-upvote.service";
import { IdeaVoteModule } from "../idea-vote.module";

@Module({
  imports: [
    forwardRef(() => IdeaVoteModule)
  ],
  controllers: [IdeaVoteUpvoteController],
  providers: [IdeaVoteUpvoteService]
})
export class IdeaVoteUpvoteModule {}
