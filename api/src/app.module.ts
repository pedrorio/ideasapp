import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";

import { ValidatorPipe } from "./shared/validator.pipe";
import { LoggerInterceptor } from "./shared/logger.interceptor";
import { HttpErrorException } from "./shared/http-error.exception";

import { UserModule } from "./user/user.module";
import { IdeaModule } from "./idea/idea.module";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    IdeaModule,
    UserModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidatorPipe
    },
    {
      provide: APP_FILTER,
      useClass: HttpErrorException
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor
    }
  ],
})
export class AppModule {}
