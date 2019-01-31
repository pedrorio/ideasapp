import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { IdeaBookmarkController } from "./idea-bookmark.controller";
import { IdeaBookmarkService } from "./idea-bookmark.service";

import { IdeaEntity } from "../idea.entity";
import { UserEntity } from "../../user/user.entity";

@Module({
  imports: [TypeOrmModule.forFeature([IdeaEntity, UserEntity])],
  controllers: [IdeaBookmarkController],
  providers: [IdeaBookmarkService]
})
export class IdeaBookmarkModule {}
