import { UserEntity } from "../user.entity";
import { IdeaRO } from "../../idea/idea.ro";

export class UserRO {
  id: string;
  created: Date;
  updated: Date;

  username: string;

  ideas?: IdeaRO[];

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

    return userRO;
  }
}
