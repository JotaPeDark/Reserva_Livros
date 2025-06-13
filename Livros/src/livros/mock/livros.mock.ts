import { CreateLivroDto, StatusLivro } from '../dto/create-livro.dto';

export const livrosMock: CreateLivroDto[] = [
  {
    titulo: 'O Senhor dos Anéis',
    autor: 'J.R.R. Tolkien',
    ISBM: '9788533613379',
    status: StatusLivro.DISPONIVEL,
    quantidade: 5,
    categoria: 'Fantasia',
    descricao: 'Uma trilogia épica de fantasia que narra a jornada do hobbit Frodo Bolseiro para destruir o Um Anel.',
  },
  {
    titulo: '1984',
    autor: 'George Orwell',
    ISBM: '9788535914849',
    status: StatusLivro.DISPONIVEL,
    quantidade: 3,
    categoria: 'Ficção Científica',
    descricao: 'Um romance distópico que retrata uma sociedade totalitária sob constante vigilância.',
  },
  {
    titulo: 'Dom Casmurro',
    autor: 'Machado de Assis',
    ISBM: '9788535914849',
    status: StatusLivro.DISPONIVEL,
    quantidade: 4,
    categoria: 'Romance',
    descricao: 'Um clássico da literatura brasileira que narra a história de Bentinho e Capitu.',
  },
  {
    titulo: 'A Arte da Guerra',
    autor: 'Sun Tzu',
    ISBM: '9788535902778',
    status: StatusLivro.DISPONIVEL,
    quantidade: 2,
    categoria: 'Estratégia',
    descricao: 'Um tratado militar chinês composto por 13 capítulos sobre estratégia e táticas de guerra.',
  },
  {
    titulo: 'O Pequeno Príncipe',
    autor: 'Antoine de Saint-Exupéry',
    ISBM: '9788535909555',
    status: StatusLivro.DISPONIVEL,
    quantidade: 6,
    categoria: 'Infantil',
    descricao: 'Uma fábula poética sobre um príncipe que viaja de planeta em planeta.',
  }
]; 