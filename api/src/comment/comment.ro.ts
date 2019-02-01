import { CommentEntity } from "./comment.entity";
import { UserRO } from "../user/user.ro";
import { IdeaRO } from "../idea/idea.ro";

export class CommentRO {
  id: string;
  created: Date;
  updated: Date;

  comment: string;

  author?: UserRO;
  idea?: IdeaRO;

  static fromComment(commentEntity: CommentEntity) {
    const {
      id, created, updated, comment
    } = commentEntity;

    const commentRO: CommentRO = {
      id, created, updated, comment
    };

    if (commentEntity.author) {
      commentRO.author = UserRO.fromUser(commentEntity.author);
    }

    if (commentEntity.idea) {
      commentRO.idea = IdeaRO.fromIdea(commentEntity.idea);
    }

    return commentRO;

  }
}
