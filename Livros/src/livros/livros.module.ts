import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { LivrosService } from './livros.service';
import { LivrosController } from './livros.controller';
import { Livro, LivroSchema } from './entities/livro.entity';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Livro.name, schema: LivroSchema }]),
  ],
  controllers: [LivrosController],
  providers: [LivrosService],
  exports: [LivrosService],
})
export class LivrosModule {}
