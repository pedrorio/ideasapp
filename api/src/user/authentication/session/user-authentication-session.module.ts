import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserEntity } from "../../user.entity";

import { UserAuthenticationSessionService } from "./user-authentication-session.service";
import { UserAuthenticationSessionController } from "./user-authentication-session.controller";
import { UserAuthenticationSessionResolver } from "./user-authentication-session.resolver";

import { UserAuthenticationModule } from "../user-authentication.module";
import { UserModule } from "../../user.module";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        UserEntity
      ]
    ),
    forwardRef(
      // required to import UserAuthenticationGuard
      () => UserAuthenticationModule
    ),
    forwardRef(
      // required to import UserAuthenticationGuard
      () => UserModule
    )
  ],
  controllers: [
    UserAuthenticationSessionController
  ],
  providers: [
    UserAuthenticationSessionService,
    UserAuthenticationSessionResolver
  ]
})
export class UserAuthenticationSessionModule {}
