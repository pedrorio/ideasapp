import { Module } from "@nestjs/common";
import { UserAuthenticationRegistrationModule } from "./registration/user-authentication-registration.module";
import { UserAuthenticationSessionModule } from "./session/user-authentication-session.module";
import { UserAuthenticationGuard } from "./user-authentication.guard";

@Module({
  imports: [
    UserAuthenticationRegistrationModule,
    UserAuthenticationSessionModule
  ],
  providers: [
    UserAuthenticationGuard
  ],
  exports: [
    UserAuthenticationGuard
  ]
})
export class UserAuthenticationModule {}
