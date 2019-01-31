import { IdeaEntity } from "./idea.entity";
import { UserRO } from "../user/user.ro";

export class IdeaRO {
  id: string;
  created: Date;
  updated: Date;

  idea: string;
  description: string;

  author?: UserRO;
  upvotes?: number;
  downvotes?: number;

  static fromIdea(ideaEntity: IdeaEntity) {
    const {
      id, created, updated, idea, description
    } = ideaEntity;

    const ideaRO: IdeaRO = {
      id, created, updated, idea, description
    };

    if (ideaEntity.author) {
      ideaRO.author = UserRO.fromUser(ideaEntity.author);
    }

    if (ideaEntity.downvotes) {
      ideaRO.downvotes = ideaEntity.downvotes.map(downvote => UserRO.fromUser(downvote)).length;
    }

    if (ideaEntity.upvotes) {
      ideaRO.upvotes = ideaEntity.upvotes.map(upvote => UserRO.fromUser(upvote)).length;
    }

    return ideaRO;
  }
}
