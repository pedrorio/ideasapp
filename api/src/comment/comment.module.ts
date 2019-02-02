import { Module } from "@nestjs/common";
import { UserEntity } from "../user/user.entity";
import { IdeaEntity } from "../idea/idea.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentEntity } from "./comment.entity";
import { CommentController } from "./comment.controller";
import { CommentService } from "./comment.service";
import { CommentUserModule } from "./user/comment-user.module";
import { CommentIdeaModule } from "./idea/comment-idea.module";
import { UserService } from "../user/user.service";
import { UserAuthenticationRegistrationService } from "../user/authentication/registration/user-authentication-registration.service";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        UserEntity,
        IdeaEntity,
        CommentEntity
      ]
    ),
    CommentUserModule,
    CommentIdeaModule
  ],
  controllers: [
    CommentController
  ],
  providers: [
    CommentService,
    UserService,
    UserAuthenticationRegistrationService
  ],
  exports: [
    CommentService
  ]
})
export class CommentModule {
}
