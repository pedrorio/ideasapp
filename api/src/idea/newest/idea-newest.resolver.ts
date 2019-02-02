import { Resolver, Query, Args } from "@nestjs/graphql";
import { IdeaNewestService } from "./idea-newest.service";

@Resolver("Idea")
export class IdeaNewestResolver {

  constructor(private ideaNewestService: IdeaNewestService) {
  }

  @Query()
  newestIdeas(@Args("page") page: number) {
    return this.ideaNewestService.findAllNewestIdeas(page);
  }
}
