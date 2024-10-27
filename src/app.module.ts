import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConexionModule } from './modules/conexion/conexion.module';
import { ConfigModule } from '@nestjs/config';


@Module({
  imports: [ConexionModule,  ConfigModule.forRoot({
    envFilePath: ".env", isGlobal: true
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
