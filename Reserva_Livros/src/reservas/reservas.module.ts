import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { HttpModule } from '@nestjs/axios';
import { ReservasService } from './reservas.service';
import { ReservasController } from './reservas.controller';
import { Reserva, ReservaSchema } from './entities/reserva.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Reserva.name, schema: ReservaSchema }]),
    HttpModule,
  ],
  controllers: [ReservasController],
  providers: [ReservasService],
})
export class ReservasModule {} 