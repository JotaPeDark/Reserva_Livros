import { IsNotEmpty, IsString, IsNumber, IsEnum } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export enum StatusLivro {
  DISPONIVEL = 'disponivel',
  EMPRESTADO = 'emprestado',
  RESERVADO = 'reservado'
}

export class CreateLivroDto {
  @ApiProperty({ description: 'Título do livro' })
  @IsNotEmpty()
  @IsString()
  titulo: string;

  @ApiProperty({ description: 'Autor do livro' })
  @IsNotEmpty()
  @IsString()
  autor: string;

  @ApiProperty({ description: 'Código ISBM do livro' })
  @IsNotEmpty()
  @IsString()
  ISBM: string;

  @ApiProperty({ description: 'Status do livro', enum: StatusLivro })
  @IsNotEmpty()
  @IsEnum(StatusLivro)
  status: StatusLivro;

  @ApiProperty({ description: 'Quantidade de exemplares disponíveis' })
  @IsNotEmpty()
  @IsNumber()
  quantidade: number;

  @ApiProperty({ description: 'Categoria do livro' })
  @IsNotEmpty()
  @IsString()
  categoria: string;

  @ApiProperty({ description: 'Descrição do livro' })
  @IsNotEmpty()
  @IsString()
  descricao: string;
} 