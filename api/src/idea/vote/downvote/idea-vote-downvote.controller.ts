import { Controller, Logger, Param, Post, UseGuards } from "@nestjs/common";

import { IdeaVoteDownvoteService } from "./idea-vote-downvote.service";
import { AuthenticationGuard } from "../../../shared/authentication.guard";
import { User } from "../../../user/user.decorator";

@Controller("ideas")
export class IdeaVoteDownvoteController {
  private logger = new Logger("IdeaVoteDownvoteController");

  constructor(private ideaVoteDownvoteService: IdeaVoteDownvoteService) {}

  private logData(options: any) {
    options.id && this.logger.log(`IDEA ${JSON.stringify(options.id)}`);
    options.data && this.logger.log(`DATA ${JSON.stringify(options.body)}`);
    options.userId && this.logger.log(`USER ${JSON.stringify(options.userId)}`);
  }

  @Post(":id/downvote")
  @UseGuards(AuthenticationGuard)
  downvoteIdea(
    @Param("id") id: string,
    @User("id") userId: string
  ) {
    this.logData({ id, userId });
    return this.ideaVoteDownvoteService.downvoteIdea(id, userId);
  }

}
