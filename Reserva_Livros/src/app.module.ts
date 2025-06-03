import { Module } from '@nestjs/common';
import { ReservaLivrosService } from './reserva_livros/reserva_livros.service';
import { ReservaLivrosController } from './reserva_livros/reserva_livros.controller';
import { ReservaLivrosModule } from './reserva_livros/reserva_livros.module';

@Module({
  imports: [ReservaLivrosModule],
  controllers: [ReservaLivrosController],
  providers: [ReservaLivrosService],
})
export class AppModule {}
