import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';
import { ApiTags, ApiOperation, ApiResponse, ApiParam, ApiBody } from '@nestjs/swagger';

@ApiTags('livros')
@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  @ApiOperation({ summary: 'Criar um novo livro' })
  @ApiBody({ type: CreateLivroDto })
  @ApiResponse({ status: 201, description: 'Livro criado com sucesso' })
  @ApiResponse({ status: 400, description: 'Dados inválidos' })
  create(@Body() createLivroDto: CreateLivroDto) {
    return this.livrosService.create(createLivroDto);
  }

  @Get()
  @ApiOperation({ summary: 'Listar todos os livros' })
  @ApiResponse({ status: 200, description: 'Lista de livros retornada com sucesso' })
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(':id')
  @ApiOperation({ summary: 'Buscar livro por ID' })
  @ApiParam({ name: 'id', description: 'ID do livro' })
  @ApiResponse({ status: 200, description: 'Livro encontrado' })
  @ApiResponse({ status: 404, description: 'Livro não encontrado' })
  findOne(@Param('id') id: string) {
    return this.livrosService.findOne(id);
  }

  @Get('isbm/:isbm')
  @ApiOperation({ summary: 'Buscar livro por ISBM' })
  @ApiParam({ name: 'isbm', description: 'Código ISBM do livro' })
  @ApiResponse({ status: 200, description: 'Livro encontrado' })
  @ApiResponse({ status: 404, description: 'Livro não encontrado' })
  findByISBM(@Param('isbm') isbm: string) {
    return this.livrosService.findByISBM(isbm);
  }

  @Patch(':id')
  @ApiOperation({ summary: 'Atualizar um livro' })
  @ApiParam({ name: 'id', description: 'ID do livro' })
  @ApiBody({ type: CreateLivroDto })
  @ApiResponse({ status: 200, description: 'Livro atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Livro não encontrado' })
  update(@Param('id') id: string, @Body() updateLivroDto: Partial<CreateLivroDto>) {
    return this.livrosService.update(id, updateLivroDto);
  }

  @Patch(':id/status')
  @ApiOperation({ summary: 'Atualizar status de um livro' })
  @ApiParam({ name: 'id', description: 'ID do livro' })
  @ApiBody({ schema: { type: 'object', properties: { status: { type: 'string', enum: ['disponivel', 'emprestado', 'reservado'] } } } })
  @ApiResponse({ status: 200, description: 'Status do livro atualizado com sucesso' })
  @ApiResponse({ status: 404, description: 'Livro não encontrado' })
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.livrosService.updateStatus(id, status);
  }
}
