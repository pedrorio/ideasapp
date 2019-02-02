import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { IdeaEntity } from "../idea.entity";
import { UserEntity } from "../../user/user.entity";

import { IdeaBookmarkController } from "./idea-bookmark.controller";
import { IdeaBookmarkService } from "./idea-bookmark.service";
import { IdeaBookmarkResolver } from "./idea-bookmark.resolver";

import { UserAuthenticationModule } from "../../user/authentication/user-authentication.module";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        IdeaEntity,
        UserEntity
      ]
    ),
    UserAuthenticationModule
  ],
  controllers: [
    IdeaBookmarkController
  ],
  providers: [
    IdeaBookmarkService,
    IdeaBookmarkResolver
  ]
})
export class IdeaBookmarkModule {
}
