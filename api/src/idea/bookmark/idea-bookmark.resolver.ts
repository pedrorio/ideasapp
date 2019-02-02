import { Resolver, Args, Mutation, Context } from "@nestjs/graphql";
import { IdeaBookmarkService } from "./idea-bookmark.service";
import { UserAuthenticationRO } from "../../user/authentication/user-authentication.ro";

@Resolver("Idea")
export class IdeaBookmarkResolver {

  constructor(private ideaBookmarkService: IdeaBookmarkService) {
  }

  @Mutation()
  bookmark(
    @Args("id")id: string,
    @Context("user") user: UserAuthenticationRO
  ) {
    const userId = user.id;
    return this.ideaBookmarkService.bookmarkIdea(id, userId);
  }

  @Mutation()
  unbookmark(
    @Args("id")id: string,
    @Context("user") user: UserAuthenticationRO
  ) {
    const userId = user.id;
    return this.ideaBookmarkService.unbookmarkIdea(id, userId);
  }

}
