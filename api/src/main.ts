import { NestFactory } from "@nestjs/core";
import { Logger } from "@nestjs/common";
import { AppModule } from "./app.module";
import { serverPort } from "./app.constants";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(serverPort);

  Logger.log(`Server running on port ${serverPort}`, "Bootstrap");
}

bootstrap();
