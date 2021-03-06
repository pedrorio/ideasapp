import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { IdeaEntity } from "../idea.entity";
import { UserEntity } from "../../user/user.entity";
import { IdeaNewestController } from "./idea-newest.controller";
import { IdeaNewestService } from "./idea-newest.service";
import { IdeaNewestResolver } from "./idea-newest.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        IdeaEntity,
        UserEntity
      ]
    )
  ],
  controllers: [
    IdeaNewestController
  ],
  providers: [
    IdeaNewestService,
    IdeaNewestResolver
  ]
})
export class IdeaNewestModule {}
