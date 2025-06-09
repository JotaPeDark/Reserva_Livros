import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { ReservasService } from './reservas.service';
import { CreateReservaDto } from './dto/create-reserva.dto';

@Controller('reservas')
export class ReservasController {
  constructor(private readonly reservasService: ReservasService) {}

  @Post()
  create(@Body() createReservaDto: CreateReservaDto) {
    return this.reservasService.create(createReservaDto);
  }

  @Get('user/:userId')
  findByUserId(@Param('userId') userId: string) {
    return this.reservasService.findByUserId(Number(userId));
  }

  @Delete(':id')
  cancel(@Param('id') id: string) {
    return this.reservasService.cancel(id);
  }
} 