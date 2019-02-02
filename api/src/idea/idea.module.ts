import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserEntity } from "../user/user.entity";
import { IdeaEntity } from "./idea.entity";
import { CommentEntity } from "../comment/comment.entity";

import { IdeaController } from "./idea.controller";
import { IdeaService } from "./idea.service";
import { IdeaResolver } from "./idea.resolver";

import { IdeaBookmarkModule } from "./bookmark/idea-bookmark.module";
import { IdeaVoteModule } from "./vote/idea-vote.module";
import { UserAuthenticationModule } from "../user/authentication/user-authentication.module";

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
    IdeaVoteModule,
    UserAuthenticationModule
  ],
  controllers: [
    IdeaController
  ],
  providers: [
    IdeaService,
    IdeaResolver
  ]
})
export class IdeaModule {}
