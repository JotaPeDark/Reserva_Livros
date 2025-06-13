import { Injectable, NotFoundException, BadRequestException, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Reserva, ReservaDocument } from './entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';

@Injectable()
export class ReservasService {
  private readonly livrosServiceUrl = 'http://localhost:3000';

  constructor(
    @InjectModel(Reserva.name) private reservaModel: Model<ReservaDocument>,
    private readonly httpService: HttpService,
  ) {}

  async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    try {
      // Primeiro, atualiza o status do livro para reservado
      await firstValueFrom(
        this.httpService.patch(
          `${this.livrosServiceUrl}/livros/${createReservaDto.livroId}/status`,
          { status: 'reservado' }
        )
      );

      // Criar a reserva
      const createdReserva = new this.reservaModel(createReservaDto);
      return createdReserva.save();
    } catch (error) {
      if (error.response?.status === 404) {
        throw new NotFoundException('Livro não encontrado');
      }
      throw new HttpException(
        'Erro ao criar reserva',
        HttpStatus.INTERNAL_SERVER_ERROR
      );
    }
  }

  async findByUserId(userId: number): Promise<Reserva[]> {
    return this.reservaModel.find({ userId }).exec();
  }

  async cancel(id: string): Promise<void> {
    const reserva = await this.reservaModel.findById(id).exec();
    if (!reserva) {
      throw new NotFoundException(`Reserva com ID ${id} não encontrada`);
    }

    // Atualizar status do livro para disponível
    await firstValueFrom(
      this.httpService.patch(
        `${this.livrosServiceUrl}/livros/${reserva.livroId}/status`,
        { status: 'disponível' }
      )
    );

    // Atualizar status da reserva
    await this.reservaModel.findByIdAndUpdate(id, { status: 'cancelada' }).exec();
  }
} 