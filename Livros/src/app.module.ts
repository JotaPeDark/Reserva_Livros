import { Module } from '@nestjs/common';
import { LivrosService } from './livros/livros.service';
import { LivrosController } from './livros/livros.controller';
import { LivrosModule } from './livros/livros.module';

@Module({
  imports: [LivrosModule],
  controllers: [LivrosController],
  providers: [LivrosService],
})
export class AppModule {}
