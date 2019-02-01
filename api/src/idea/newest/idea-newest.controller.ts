import { Controller, Get, Logger, Query } from "@nestjs/common";
import { IdeaNewestService } from "./idea-newest.service";

@Controller("ideas")
export class IdeaNewestController {
  private logger = new Logger("IdeaNewestController");

  constructor(private ideaNewestService: IdeaNewestService) {
  }

  private logData(options: any) {
    options.id && this.logger.log(`IDEA ${JSON.stringify(options.id)}`);
    options.data && this.logger.log(`DATA ${JSON.stringify(options.body)}`);
    options.userId && this.logger.log(`USER ${JSON.stringify(options.userId)}`);
  }

  @Get("newest")
  findAllNewestIdeas(@Query("page") page: number) {
    return this.ideaNewestService.findAllNewestIdeas(page);
  }

}
