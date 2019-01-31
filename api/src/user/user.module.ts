import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserController } from "./user.controller";
import { UserService } from "./user.service";
import { UserEntity } from "./user.entity";

import { IdeaEntity } from "../idea/idea.entity";

import { UserAuthenticationModule } from "./authentication/user-authentication.module";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity, IdeaEntity]),
    forwardRef(() => UserAuthenticationModule)
  ],
  controllers: [UserController],
  providers: [UserService],
  exports: [UserService]
})
export class UserModule {}
