import { Module } from "@nestjs/common";
import { UserAuthenticationRegistrationModule } from "./registration/user-authentication-registration.module";
import { UserAuthenticationSessionModule } from "./session/user-authentication-session.module";

@Module({
  imports: [
    UserAuthenticationRegistrationModule,
    UserAuthenticationSessionModule
  ]
})
export class UserAuthenticationModule {}
