import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('reservas')
@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  @ApiOperation({ summary: 'Criar uma nova reserva' })
  @ApiBody({ type: CreateReservaDto })
  @ApiResponse({ status: 201, description: 'Reserva criada com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservasService.create(createReservaDto);
  }

  @Get('user/:userId')
  @ApiOperation({ summary: 'Buscar reservas por ID do usuário' })
  @ApiParam({ name: 'userId', description: 'ID do usuário' })
  @ApiResponse({ status: 200, description: 'Lista de reservas do usuário' })
  @ApiResponse({ status: 404, description: 'Usuário não encontrado' })
  findByUserId(@Param('userId') userId: string) {
    return this.reservasService.findByUserId(Number(userId));
  }

  @Delete(':id')
  @ApiOperation({ summary: 'Cancelar uma reserva' })
  @ApiParam({ name: 'id', description: 'ID da reserva' })
  @ApiResponse({ status: 200, description: 'Reserva cancelada com sucesso' })
  @ApiResponse({ status: 404, description: 'Reserva não encontrada' })
  cancel(@Param('id') id: string) {
    return this.reservasService.cancel(id);
  }
} 