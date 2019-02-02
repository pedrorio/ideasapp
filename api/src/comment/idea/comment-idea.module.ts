import { forwardRef, Module } from "@nestjs/common";
import { CommentIdeaService } from "./comment-idea.service";
import { CommentIdeaController } from "./comment-idea.controller";
import { IdeaEntity } from "../../idea/idea.entity";
import { TypeOrmModule } from "@nestjs/typeorm";
import { CommentEntity } from "../comment.entity";
import { CommentModule } from "../comment.module";
import { UserEntity } from "../../user/user.entity";
import { UserAuthenticationRegistrationService } from "../../user/authentication/registration/user-authentication-registration.service";


@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        IdeaEntity,
        CommentEntity,
        UserEntity
      ]
    ),
    forwardRef(() => CommentModule)
  ],
  controllers: [
    CommentIdeaController
  ],
  providers: [
    CommentIdeaService,
    UserAuthenticationRegistrationService
  ],
})
export class CommentIdeaModule {
}
