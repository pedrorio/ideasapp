import { IdeaEntity } from "./idea.entity";
import { UserRO } from "../user/ro";

export class IdeaRO {
  id: string;
  created: Date;
  updated: Date;

  idea: string;
  description: string;

  author?: UserRO;

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

    return ideaRO;
  }
}
