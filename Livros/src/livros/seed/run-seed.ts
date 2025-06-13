import { NestFactory } from '@nestjs/core';
import { AppModule } from '../../app.module';
import { seedLivros } from './seed';
import { getModelToken } from '@nestjs/mongoose';
import { Livro } from '../entities/livro.entity';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);
  const livroModel = app.get(getModelToken(Livro.name));
  
  await seedLivros(livroModel);
  await app.close();
}

bootstrap(); 