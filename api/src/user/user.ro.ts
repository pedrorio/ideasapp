import { IdeaRO } from "../idea/idea.ro";
import { UserEntity } from "./user.entity";
import { CommentRO } from "../comment/comment.ro";

export class UserRO {
  id: string;
  created: Date;
  updated: Date;

  username: string;

  ideas?: IdeaRO[];
  bookmarks?: IdeaRO[];
  comments?: CommentRO[];

  static fromUser(userEntity: UserEntity) {
    const { id, created, updated, username } = userEntity;

    const userRO: UserRO = {
      id,
      created,
      updated,
      username
    };

    if (userEntity.ideas) {
      userRO.ideas = userEntity.ideas.map(idea => IdeaRO.fromIdea(idea));
    }

    if (userEntity.bookmarks) {
      userRO.bookmarks = userEntity.bookmarks.map(bookmark => IdeaRO.fromIdea(bookmark));
    }

    if (userEntity.comments) {
      userRO.comments = userEntity.comments.map(comment => CommentRO.fromComment(comment));
    }

    return userRO;
  }
}
