import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Livro, LivroDocument } from './entities/livro.entity';
import { CreateLivroDto } from './dto/create-livro.dto';

@Injectable()
export class LivrosService {
  constructor(
    @InjectModel(Livro.name) private livroModel: Model<LivroDocument>,
  ) {}

  async create(createLivroDto: CreateLivroDto): Promise<Livro> {
    const createdLivro = new this.livroModel(createLivroDto);
    return createdLivro.save();
  }

  async findAll(): Promise<Livro[]> {
    return this.livroModel.find().exec();
  }

  async findOne(id: string): Promise<Livro> {
    const livro = await this.livroModel.findById(id).exec();
    if (!livro) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
    return livro;
  }

  async findByISBM(isbm: string): Promise<Livro> {
    const livro = await this.livroModel.findOne({ ISBM: isbm }).exec();
    if (!livro) {
      throw new NotFoundException(`Livro com ISBM ${isbm} não encontrado`);
    }
    return livro;
  }

  async update(id: string, updateLivroDto: Partial<CreateLivroDto>): Promise<Livro> {
    const updatedLivro = await this.livroModel
      .findByIdAndUpdate(id, updateLivroDto, { new: true })
      .exec();
    if (!updatedLivro) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
    return updatedLivro;
  }

  async updateStatus(id: string, status: string): Promise<Livro> {
    const updatedLivro = await this.livroModel
      .findByIdAndUpdate(id, { status }, { new: true })
      .exec();
    if (!updatedLivro) {
      throw new NotFoundException(`Livro com ID ${id} não encontrado`);
    }
    return updatedLivro;
  }
}
