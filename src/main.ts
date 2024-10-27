import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Console } from 'console';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const puerto = Number(process.env.PUERTO_SERVIDOR)
  await app.listen(puerto, ()=>{
    console.log("Servidor funcionando en el puerto: "+puerto);
  });
}
bootstrap();
