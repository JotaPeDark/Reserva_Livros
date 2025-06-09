import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { LivrosService } from './livros.service';
import { CreateLivroDto } from './dto/create-livro.dto';

@Controller('livros')
export class LivrosController {
  constructor(private readonly livrosService: LivrosService) {}

  @Post()
  create(@Body() createLivroDto: CreateLivroDto) {
    return this.livrosService.create(createLivroDto);
  }

  @Get()
  findAll() {
    return this.livrosService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.livrosService.findOne(id);
  }

  @Get('isbm/:isbm')
  findByISBM(@Param('isbm') isbm: string) {
    return this.livrosService.findByISBM(isbm);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLivroDto: Partial<CreateLivroDto>) {
    return this.livrosService.update(id, updateLivroDto);
  }

  @Patch(':id/status')
  updateStatus(@Param('id') id: string, @Body('status') status: string) {
    return this.livrosService.updateStatus(id, status);
  }
}
