import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { HttpService } from '@nestjs/axios';
import { firstValueFrom } from 'rxjs';
import { Reserva, ReservaDocument } from './entities/reserva.entity';
import { CreateReservaDto } from './dto/create-reserva.dto';

@Injectable()
export class ReservasService {
  constructor(
    @InjectModel(Reserva.name) private reservaModel: Model<ReservaDocument>,
    private readonly httpService: HttpService,
  ) {}

  async create(createReservaDto: CreateReservaDto): Promise<Reserva> {
    try {
      // Verificar disponibilidade do livro
      const response = await firstValueFrom(
        this.httpService.get(`http://localhost:3000/livros/isbm/${createReservaDto.ISBM}`),
      );
      
      if (response.data.status !== 'disponível') {
        throw new BadRequestException('Livro não está disponível para reserva');
      }

      // Criar a reserva
      const createdReserva = new this.reservaModel(createReservaDto);
      const savedReserva = await createdReserva.save();

      // Atualizar status do livro
      await firstValueFrom(
        this.httpService.patch(`http://localhost:3000/livros/isbm/${createReservaDto.ISBM}/status`, {
          status: 'reservado',
        }),
      );

      return savedReserva;
    } catch (error) {
      if (error.response?.status === 404) {
        throw new NotFoundException('Livro não encontrado');
      }
      throw error;
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
      this.httpService.patch(`http://localhost:3000/livros/isbm/${reserva.ISBM}/status`, {
        status: 'disponível',
      }),
    );

    // Atualizar status da reserva
    await this.reservaModel.findByIdAndUpdate(id, { status: 'cancelada' }).exec();
  }
} 