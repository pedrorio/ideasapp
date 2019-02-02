import { forwardRef, Module } from "@nestjs/common";
import { CommentModule } from "../comment.module";
import { CommentUserService } from "./comment-user.service";
import { CommentUserController } from "./comment-user.controller";
import { UserEntity } from "../../user/user.entity";
import { CommentEntity } from "../comment.entity";
import { TypeOrmModule } from "@nestjs/typeorm";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        UserEntity,
        CommentEntity
      ]
    ),
    forwardRef(() => CommentModule)
    // because of RO
  ],
  controllers: [CommentUserController],
  providers: [CommentUserService],
})
export class CommentUserModule {}
