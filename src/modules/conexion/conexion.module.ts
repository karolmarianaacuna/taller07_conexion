import { Module } from '@nestjs/common';
import { DataSource } from 'typeorm';
import { SnakeNamingStrategy } from 'typeorm-naming-strategies';

@Module({

    imports:[],
    exports:[DataSource],
    providers:[
        {
            provide: DataSource,
            inject: [],
            useFactory: async () => {
                try {
                    const poolConexion = new DataSource({
                        type: 'postgres',
                        host: String(process.env.HOST),
                        port: Number(process.env.PUERTO),
                        database: String(process.env.BASE_DATOS),
                        username: String(process.env.USUARIO),
                        password: String(process.env.CLAVE),

                        synchronize: true,
                        logging: true,
                        namingStrategy: new SnakeNamingStrategy(),
                        entities: []// aca van todas las clases entidades 


                    });

                    await poolConexion.initialize();
                    console.log("Conexion establecida con :"+  String(process.env.BASE_DATOS))
                    return poolConexion;

                    
                } catch (elError) {

                    console.log("No se pudo Conectar");
                    throw elError;
                    
                }

         }
        }
    ],

})
export class ConexionModule {}
