import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { IdeaController } from "./idea.controller";
import { IdeaService } from "./idea.service";

import { IdeaEntity } from "./idea.entity";
import { UserEntity } from "../user/user.entity";

import { IdeaBookmarkModule } from "./bookmark/idea-bookmark.module";
import { IdeaVoteModule } from "./vote/idea-vote.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([IdeaEntity, UserEntity]),
    IdeaBookmarkModule,
    IdeaVoteModule
  ],
  controllers: [IdeaController],
  providers: [IdeaService]
})
export class IdeaModule {}
