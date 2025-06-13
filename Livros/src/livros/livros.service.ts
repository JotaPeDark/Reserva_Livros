import { Injectable, NotFoundException, OnModuleInit } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Livro, LivroDocument } from './entities/livro.entity';
import { CreateLivroDto } from './dto/create-livro.dto';
import { livrosMock } from './mock/livros.mock';

@Injectable()
export class LivrosService implements OnModuleInit {
  constructor(
    @InjectModel(Livro.name) private livroModel: Model<LivroDocument>,
  ) {}

  async onModuleInit() {
    // Verifica se já existem livros no banco
    const count = await this.livroModel.countDocuments().exec();
    if (count === 0) {
      // Se não houver livros, insere os dados mockados
      await this.livroModel.insertMany(livrosMock);
    }
  }

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
