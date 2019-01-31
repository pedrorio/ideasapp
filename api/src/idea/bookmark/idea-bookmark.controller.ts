import { Controller, Delete, Logger, Param, Post, UseGuards } from "@nestjs/common";

import { IdeaBookmarkService } from "./idea-bookmark.service";
import { User } from "../../user/user.decorator";
import { AuthenticationGuard } from "../../shared/authentication.guard";

@Controller("ideas")
export class IdeaBookmarkController {
  private logger = new Logger("IdeaVoteUpvoteController");

  constructor(private ideaBookmarkService: IdeaBookmarkService) {
  }

  private logData(options: any) {
    options.id && this.logger.log(`IDEA ${JSON.stringify(options.id)}`);
    options.data && this.logger.log(`DATA ${JSON.stringify(options.body)}`);
    options.userId && this.logger.log(`USER ${JSON.stringify(options.userId)}`);
  }

  @Post(":id/bookmark")
  @UseGuards(AuthenticationGuard)
  bookmarkIdea(
    @Param("id") id: string,
    @User("id") userId: string
  ) {
    this.logData({ id, userId });
    return this.ideaBookmarkService.bookmarkIdea(id, userId);
  }

  @Delete(":id/bookmark")
  @UseGuards(AuthenticationGuard)
  unbookmarkIdea(
    @Param("id") id: string,
    @User("id") userId: string
  ) {
    this.logData({ id, userId });
    return this.ideaBookmarkService.unbookmarkIdea(id, userId);
  }

}
