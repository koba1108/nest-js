import {NestFactory} from '@nestjs/core';
import {AppModule} from './app.module';

const PORT = process.env.PORT || 3000

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api')
  await app.listen(PORT);
}

bootstrap().then(() => {
  console.log(`start listen port ${PORT}`)
}).catch(e => {
  console.error(e)
});
