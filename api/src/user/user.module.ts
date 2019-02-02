import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserService } from "./user.service";
import { UserController } from "./user.controller";
import { UserResolver } from "./user.resolver";
import { UserEntity } from "./user.entity";

import { IdeaEntity } from "../idea/idea.entity";
import { CommentEntity } from "../comment/comment.entity";

import { IdeaModule } from "../idea/idea.module";
import { CommentModule } from "../comment/comment.module";
import { UserAuthenticationModule } from "./authentication/user-authentication.module";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        UserEntity,
        IdeaEntity,
        CommentEntity
      ]
    ),
    IdeaModule,
    CommentModule,
    UserAuthenticationModule
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    UserResolver
  ],
  exports: [
    UserService
  ]
})
export class UserModule {}
