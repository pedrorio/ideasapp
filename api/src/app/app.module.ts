import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";

import { TypeOrmModule } from "@nestjs/typeorm";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { IdeaModule } from "../idea/idea.module";
import { HttpErrorException } from "../shared/http-error.exception";
import { LoggerInterceptor } from "../shared/logger.interceptor";
import { ValidatorPipe } from "../shared/validator.pipe";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    IdeaModule
  ],
  controllers: [AppController],
  providers: [
    AppService,
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
