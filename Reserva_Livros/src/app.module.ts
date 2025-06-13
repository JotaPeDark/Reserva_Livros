import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReservasModule } from './reservas/reservas.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/biblioteca_reservas'),
    ReservasModule,
  ],
})
export class AppModule {}
