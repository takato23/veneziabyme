import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    abortOnError: false
  });
  app.setGlobalPrefix("api/v1");
  await app.listen(process.env.PORT ?? 3001);
}

bootstrap().catch((error) => {
  console.error("Failed to bootstrap API", error);
  process.exit(1);
});
