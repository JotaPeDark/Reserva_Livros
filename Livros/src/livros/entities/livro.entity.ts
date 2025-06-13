import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type LivroDocument = Livro & Document;

@Schema()
export class Livro {
  @Prop()
  titulo: string;

  @Prop()
  autor: string;

  @Prop()
  ISBM: string;

  @Prop({ default: 'disponível' })
  status: string;
}

export const LivroSchema = SchemaFactory.createForClass(Livro); 