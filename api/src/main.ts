import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { SwaggerModule, DocumentBuilder } from "@nestjs/swagger";

import * as helmet from "helmet";
import * as rateLimit from "express-rate-limit";

import { AppModule } from "./app.module";
import { serverPort } from "./app.constants";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(helmet());
  app.use(rateLimit(
    {
      windowMs: 15 * 60 * 1000, // 15 minutes
      max: 15 * 60 / 5 // limit each IP to 150 requests per windowMs
    }
  ));

  app.enableCors();

  const options = new DocumentBuilder()
  .setBasePath("api")
  .setTitle("Ideas API")
  .setDescription("A NestJS API")
  .setVersion("1.0")
  .addBearerAuth()
  .build();

  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup("docs", app, document);

  await app.listen(serverPort);

  Logger.log(`Server running on port ${serverPort}`, "Bootstrap");

}

bootstrap();
