import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

import { IdeaEntity } from "../idea/idea.entity";

import { UserAuthenticationModule } from "./authentication/user-authentication.module";
import { UserResolver } from "./user.resolver";
import { CommentService } from "../comment/comment.service";
import { CommentEntity } from "../comment/comment.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, IdeaEntity, CommentEntity]),
    forwardRef(() => UserAuthenticationModule)
  ],
  controllers: [
    UserController
  ],
  providers: [
    UserService,
    UserResolver,
    CommentService
  ],
  exports: [
    UserService
  ]
})
export class UserModule {}
