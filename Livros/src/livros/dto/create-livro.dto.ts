import { IsNotEmpty, IsString } from 'class-validator';

export class CreateLivroDto {
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @IsNotEmpty()
  @IsString()
  autor: string;

  @IsNotEmpty()
  @IsString()
  ISBM: string;
} 