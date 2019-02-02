import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserAuthenticationRegistrationService } from "./user-authentication-registration.service";
import { UserAuthenticationRegistrationController } from "./user-authentication-registration.controller";

import { UserEntity } from "../../user.entity";
import { UserModule } from "../../user.module";
import { UserAuthenticationRegistrationResolver } from "./user-authentication-registration.resolver";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => UserModule)
  ],
  controllers: [
    UserAuthenticationRegistrationController
  ],
  providers: [
    UserAuthenticationRegistrationService
  ],
  exports: [
    UserAuthenticationRegistrationService,
    UserAuthenticationRegistrationResolver
  ]
})
export class UserAuthenticationRegistrationModule {
}
