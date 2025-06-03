import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({           
    origin: true,
    methods: 'GET,POST',
    credentials: true,})
  await app.listen(process.env.SERVER_PORT ?? 3000);
  console.log(`server runs on ${process.env.SERVER_PORT ?? 3000} port`)
}
bootstrap();
