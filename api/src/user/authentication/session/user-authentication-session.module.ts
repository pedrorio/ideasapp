import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserAuthenticationSessionService } from "./user-authentication-session.service";
import { UserAuthenticationSessionController } from "./user-authentication-session.controller";
import { UserModule } from "../../user.module";
import { UserEntity } from "../../user.entity";
import { UserAuthenticationRegistrationService } from "../registration/user-authentication-registration.service";
import { UserAuthenticationSessionResolver } from "./user-authentication-session.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => UserModule)
  ],
  controllers: [
    UserAuthenticationSessionController
  ],
  providers: [
    UserAuthenticationSessionService,
    UserAuthenticationRegistrationService,
    UserAuthenticationSessionResolver
  ]
})
export class UserAuthenticationSessionModule {}
