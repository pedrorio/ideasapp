import { UserEntity } from "../user/user.entity";
import { HttpException, HttpStatus } from "@nestjs/common";
import { CommentEntity } from "./comment.entity";

export class CommentPolicy {

  static authorize(userEntity: UserEntity, commentEntity: CommentEntity) {

    if (!commentEntity) {
      throw new HttpException("Not Found", HttpStatus.NOT_FOUND);
    }

    if (JSON.stringify(userEntity) !== JSON.stringify(commentEntity.author)) {
      throw new HttpException("Unauthorized", HttpStatus.UNAUTHORIZED);
    }

  }
}
