import { Model } from 'mongoose';
import { Livro } from '../entities/livro.entity';

const livros = [
  {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    ISBM: '9788533613379',
    status: 'disponível'
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    ISBM: '9788535914849',
    status: 'disponível'
  },
  {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ISBM: '9788535914848',
    status: 'disponível'
  },
  {
    titulo: 'A Arte da Guerra',
    autor: 'Sun Tzu',
    ISBM: '9788535914847',
    status: 'disponível'
  },
  {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ISBM: '9788535914846',
    status: 'disponível'
  },
  {
    titulo: 'Cem Anos de Solidão',
    autor: 'Gabriel García Márquez',
    ISBM: '9788535914845',
    status: 'disponível'
  },
  {
    titulo: 'O Alquimista',
    autor: 'Paulo Coelho',
    ISBM: '9788535914844',
    status: 'disponível'
  },
  {
    titulo: 'A Divina Comédia',
    autor: 'Dante Alighieri',
    ISBM: '9788535914843',
    status: 'disponível'
  },
  {
    titulo: 'Crime e Castigo',
    autor: 'Fiódor Dostoiévski',
    ISBM: '9788535914842',
    status: 'disponível'
  },
  {
    titulo: 'O Processo',
    autor: 'Franz Kafka',
    ISBM: '9788535914841',
    status: 'disponível'
  },
  {
    titulo: 'Memórias Póstumas de Brás Cubas',
    autor: 'Machado de Assis',
    ISBM: '9788535914840',
    status: 'disponível'
  },
  {
    titulo: 'O Retrato de Dorian Gray',
    autor: 'Oscar Wilde',
    ISBM: '9788535914839',
    status: 'disponível'
  },
  {
    titulo: 'A Metamorfose',
    autor: 'Franz Kafka',
    ISBM: '9788535914838',
    status: 'disponível'
  },
  {
    titulo: 'O Grande Gatsby',
    autor: 'F. Scott Fitzgerald',
    ISBM: '9788535914837',
    status: 'disponível'
  },
  {
    titulo: 'O Conde de Monte Cristo',
    autor: 'Alexandre Dumas',
    ISBM: '9788535914836',
    status: 'disponível'
  },
  {
    titulo: 'Os Miseráveis',
    autor: 'Victor Hugo',
    ISBM: '9788535914835',
    status: 'disponível'
  },
  {
    titulo: 'O Nome da Rosa',
    autor: 'Umberto Eco',
    ISBM: '9788535914834',
    status: 'disponível'
  },
  {
    titulo: 'O Apanhador no Campo de Centeio',
    autor: 'J.D. Salinger',
    ISBM: '9788535914833',
    status: 'disponível'
  },
  {
    titulo: 'O Estrangeiro',
    autor: 'Albert Camus',
    ISBM: '9788535914832',
    status: 'disponível'
  },
  {
    titulo: 'O Príncipe',
    autor: 'Nicolau Maquiavel',
    ISBM: '9788535914831',
    status: 'disponível'
  },
  {
    titulo: 'A Revolução dos Bichos',
    autor: 'George Orwell',
    ISBM: '9788535914830',
    status: 'disponível'
  },
  {
    titulo: 'O Hobbit',
    autor: 'J.R.R. Tolkien',
    ISBM: '9788535914829',
    status: 'disponível'
  },
  {
    titulo: 'O Código Da Vinci',
    autor: 'Dan Brown',
    ISBM: '9788535914828',
    status: 'disponível'
  },
  {
    titulo: 'O Poder do Hábito',
    autor: 'Charles Duhigg',
    ISBM: '9788535914827',
    status: 'disponível'
  },
  {
    titulo: 'Sapiens',
    autor: 'Yuval Noah Harari',
    ISBM: '9788535914826',
    status: 'disponível'
  },
  {
    titulo: 'O Mundo de Sofia',
    autor: 'Jostein Gaarder',
    ISBM: '9788535914825',
    status: 'disponível'
  },
  {
    titulo: 'O Homem em Busca de Sentido',
    autor: 'Viktor E. Frankl',
    ISBM: '9788535914824',
    status: 'disponível'
  },
  {
    titulo: 'O Poder do Agora',
    autor: 'Eckhart Tolle',
    ISBM: '9788535914823',
    status: 'disponível'
  },
  {
    titulo: 'O Milagre da Manhã',
    autor: 'Hal Elrod',
    ISBM: '9788535914822',
    status: 'disponível'
  },
  {
    titulo: 'O Poder da Ação',
    autor: 'Paulo Vieira',
    ISBM: '9788535914821',
    status: 'disponível'
  }
];

export async function seedLivros(livroModel: Model<Livro>) {
  try {
    await livroModel.deleteMany({});
    await livroModel.insertMany(livros);
    console.log('Livros populados com sucesso!');
  } catch (error) {
    console.error('Erro ao popular livros:', error);
  }
} 