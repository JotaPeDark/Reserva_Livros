import { IsNotEmpty, IsNumber, IsString, IsDate } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateReservaDto {
  @IsNotEmpty()
  @IsNumber()
  userId: number;

  @IsNotEmpty()
  @IsString()
  ISBM: string;

  @IsNotEmpty()
  @Type(() => Date)
  @IsDate()
  dataReserva: Date;
} 