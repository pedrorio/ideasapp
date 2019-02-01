import { forwardRef, Module } from "@nestjs/common";
import { CommentIdeaService } from "./comment-idea.service";
import { CommentIdeaController } from "./comment-idea.controller";
import { IdeaEntity } from "../../idea/idea.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentEntity } from "../comment.entity";
import { CommentModule } from "../comment.module";


@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        IdeaEntity,
        CommentEntity
      ]
    ),
    forwardRef(() => CommentModule)
    // because of RO
  ],
  controllers: [CommentIdeaController],
  providers: [CommentIdeaService],
})
export class CommentIdeaModule {
}
