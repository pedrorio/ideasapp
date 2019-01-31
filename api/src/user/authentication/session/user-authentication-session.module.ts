import { forwardRef, Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";

import { UserAuthenticationSessionService } from "./user-authentication-session.service";
import { UserAuthenticationSessionController } from "./user-authentication-session.controller";
import { UserModule } from "../../user.module";
import { UserEntity } from "../../user.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([UserEntity]),
    forwardRef(() => UserModule)
  ],
  controllers: [UserAuthenticationSessionController],
  providers: [UserAuthenticationSessionService]
})
export class UserAuthenticationSessionModule {}
