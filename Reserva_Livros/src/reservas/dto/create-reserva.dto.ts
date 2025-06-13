import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

export class CreateReservaDto {
  @ApiProperty({ description: 'ID do usuário que está fazendo a reserva' })
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @ApiProperty({ description: 'Código ISBM do livro a ser reservado' })
  @IsNotEmpty()
  @IsString()
  ISBM: string;

  @ApiProperty({ description: 'Data da reserva', example: '2024-03-13T00:00:00.000Z' })
  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  dataReserva: Date;

  @ApiProperty({ description: 'ID do livro a ser reservado' })
  @IsNotEmpty()
  @IsString()
  livroId: string;
} 