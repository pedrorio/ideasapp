import { IdeaEntity } from "./idea.entity";
import { UserEntity } from "../user/user.entity";
import { HttpException, HttpStatus } from "@nestjs/common";

export class IdeaPolicy {

  static authorize(userEntity: UserEntity, ideaEntity: IdeaEntity) {

    if (!ideaEntity) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    if (JSON.stringify(userEntity) !== JSON.stringify(ideaEntity)) {
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }

  }

}
