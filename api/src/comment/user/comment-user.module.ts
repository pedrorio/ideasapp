import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserEntity } from "../../user/user.entity";
import { CommentEntity } from "../comment.entity";

import { CommentUserService } from "./comment-user.service";
import { CommentUserController } from "./comment-user.controller";
import { CommentUserResolver } from "./comment-user.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        UserEntity,
        CommentEntity
      ]
    )
  ],
  controllers: [
    CommentUserController
  ],
  providers: [
    CommentUserService,
    CommentUserResolver
  ],
})
export class CommentUserModule {
}
