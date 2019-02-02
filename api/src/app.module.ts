import { Module } from "@nestjs/common";
import { APP_FILTER, APP_INTERCEPTOR, APP_PIPE } from "@nestjs/core";
import { TypeOrmModule } from "@nestjs/typeorm";
import { ValidatorPipe } from "./shared/validator.pipe";
import { LoggerInterceptor } from "./shared/logger.interceptor";
import { HttpErrorExceptionFilter } from "./shared/http-error.filter";
import { UserModule } from "./user/user.module";
import { IdeaModule } from "./idea/idea.module";
import { CommentModule } from "./comment/comment.module";

import { GraphQLModule } from "@nestjs/graphql";

@Module({
  imports: [
    TypeOrmModule.forRoot(),
    GraphQLModule.forRoot({
      typePaths: ["./**/*.graphql"],
      context: ({ req }) => ({ request: req })
    }),
    IdeaModule,
    UserModule,
    CommentModule
  ],
  providers: [
    {
      provide: APP_PIPE,
      useClass: ValidatorPipe
    },
    {
      provide: APP_FILTER,
      useClass: HttpErrorExceptionFilter
    },
    {
      provide: APP_INTERCEPTOR,
      useClass: LoggerInterceptor
    }
  ],
})
export class AppModule {
}
