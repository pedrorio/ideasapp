import { Resolver, Args, Mutation, Context } from "@nestjs/graphql";
import { IdeaBookmarkService } from "./idea-bookmark.service";
import { UserAuthenticationRO } from "../../user/authentication/user-authentication.ro";
import { UseGuards } from "@nestjs/common";
import { UserAuthenticationGuard } from "../../user/authentication/user-authentication.guard";

@Resolver("Idea")
export class IdeaBookmarkResolver {

  constructor(private ideaBookmarkService: IdeaBookmarkService) {
  }

  @Mutation()
  @UseGuards(UserAuthenticationGuard)
  bookmarkIdea(
    @Args("id")id: string,
    @Context("user") user: UserAuthenticationRO
  ) {
    const userId = user.id;
    return this.ideaBookmarkService.bookmarkIdea(id, userId);
  }

  @Mutation()
  @UseGuards(UserAuthenticationGuard)
  unbookmarkIdea(
    @Args("id")id: string,
    @Context("user") user: UserAuthenticationRO
  ) {
    const userId = user.id;
    return this.ideaBookmarkService.unbookmarkIdea(id, userId);
  }

}
