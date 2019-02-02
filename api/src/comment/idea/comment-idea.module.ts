import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { IdeaEntity } from "../../idea/idea.entity";
import { CommentEntity } from "../comment.entity";
import { UserEntity } from "../../user/user.entity";

import { CommentIdeaService } from "./comment-idea.service";
import { CommentIdeaController } from "./comment-idea.controller";
import { CommentIdeaResolver } from "./comment-idea.resolver";

import { UserAuthenticationModule } from "../../user/authentication/user-authentication.module";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        IdeaEntity,
        CommentEntity,
        UserEntity
      ]
    ),
    UserAuthenticationModule
  ],
  controllers: [
    CommentIdeaController
  ],
  providers: [
    CommentIdeaService,
    CommentIdeaResolver
  ],
})
export class CommentIdeaModule {
}
