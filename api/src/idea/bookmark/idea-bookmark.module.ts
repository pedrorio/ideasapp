import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { IdeaBookmarkController } from "./idea-bookmark.controller";
import { IdeaBookmarkService } from "./idea-bookmark.service";

import { IdeaEntity } from "../idea.entity";
import { UserEntity } from "../../user/user.entity";
import { UserService } from "../../user/user.service";
import { UserAuthenticationRegistrationService } from "../../user/authentication/registration/user-authentication-registration.service";
import { IdeaBookmarkResolver } from "./idea-bookmark.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        IdeaEntity,
        UserEntity
      ]
    )],
  controllers: [
    IdeaBookmarkController
  ],
  providers: [
    IdeaBookmarkService,
    UserService,
    UserAuthenticationRegistrationService,
    IdeaBookmarkResolver
  ]
})
export class IdeaBookmarkModule {
}
