import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserAuthenticationRegistrationService } from "./user-authentication-registration.service";
import { UserAuthenticationRegistrationController } from "./user-authentication-registration.controller";
import { UserAuthenticationRegistrationResolver } from "./user-authentication-registration.resolver";

import { UserEntity } from "../../user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        UserEntity
      ]
    ),
  ],
  controllers: [
    UserAuthenticationRegistrationController
  ],
  providers: [
    UserAuthenticationRegistrationService,
    UserAuthenticationRegistrationResolver
  ],
  exports: [
    // Required in UserAuthenticationGuard
    UserAuthenticationRegistrationService
  ]
})
export class UserAuthenticationRegistrationModule {
}
