import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app/app.module";
import { serverPort } from "./config/constants";
import { Logger } from "@nestjs/common";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverPort);
  
  Logger.log(`Server running on port ${serverPort}`, "main");
}

bootstrap();
