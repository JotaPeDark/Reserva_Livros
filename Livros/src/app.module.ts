import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://mongodb:27017/biblioteca_livros'),
    LivrosModule,
  ],
})
export class AppModule {}
