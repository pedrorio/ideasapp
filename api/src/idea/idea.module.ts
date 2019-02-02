import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { IdeaController } from "./idea.controller";
import { IdeaService } from "./idea.service";

import { IdeaEntity } from "./idea.entity";
import { UserEntity } from "../user/user.entity";

import { IdeaBookmarkModule } from "./bookmark/idea-bookmark.module";
import { IdeaVoteModule } from "./vote/idea-vote.module";
import { IdeaResolver } from "./idea.resolver";
import { CommentService } from "../comment/comment.service";
import { CommentEntity } from "../comment/comment.entity";
import { UserService } from "../user/user.service";
import { UserAuthenticationRegistrationService } from "../user/authentication/registration/user-authentication-registration.service";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        IdeaEntity,
        UserEntity,
        CommentEntity
      ]
    ),
    IdeaBookmarkModule,
    IdeaVoteModule
  ],
  controllers: [
    IdeaController
  ],
  providers: [
    IdeaService,
    IdeaResolver,
    CommentService,
    UserService,
    UserAuthenticationRegistrationService
  ]
})
export class IdeaModule {}
