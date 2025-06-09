import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Livro {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo: string;

  @Column()
  autor: string;

  @Column()
  ISBM: string;

  @Column({ default: 'disponível' })
  status: string;
} 