import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ReservaDocument = Reserva & Document;

@Schema()
export class Reserva {
  @Prop({ required: true })
  userId: number;

  @Prop({ required: true })
  livroId: string;

  @Prop({ required: true })
  ISBM: string;

  @Prop({ required: true })
  dataReserva: Date;

  @Prop({ default: 'ativa' })
  status: string;
}

export const ReservaSchema = SchemaFactory.createForClass(Reserva); 