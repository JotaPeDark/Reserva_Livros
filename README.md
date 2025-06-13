# Sistema de Biblioteca

Este é um sistema de biblioteca distribuído com dois microserviços:
- Serviço de Livros (porta 3000)
- Serviço de Reservas (porta 3001)

## Requisitos

- Docker
- Docker Compose
- Node.js 18+
- npm

## Instalação e Execução

1. Clone o repositório
2. Execute o script de setup:
```bash
chmod +x setup.sh
./setup.sh
```

Isso irá:
- Instalar as dependências necessárias
- Construir os containers Docker
- Iniciar os serviços

## Testando o Sistema

1. Para listar todos os livros:
```bash
curl http://localhost:3000/livros
```

2. Para criar uma reserva:
```bash
curl -X POST http://localhost:3001/reservas \
  -H "Content-Type: application/json" \
  -d '{
    "livroId": "ID_DO_LIVRO",
    "userId": 1,
    "dataReserva": "2024-03-20T10:00:00Z"
  }'
```

3. Para verificar as reservas de um usuário:
```bash
curl http://localhost:3001/reservas/user/1
```

4. Para cancelar uma reserva:
```bash
curl -X DELETE http://localhost:3001/reservas/ID_DA_RESERVA
```

## Estrutura do Projeto

```
.
├── Livros/                 # Serviço de Livros
│   ├── src/
│   │   ├── livros/        # Módulo de Livros
│   │   └── app.module.ts
│   └── Dockerfile
├── Reserva_Livros/        # Serviço de Reservas
│   ├── src/
│   │   ├── reservas/      # Módulo de Reservas
│   │   └── app.module.ts
│   └── Dockerfile
├── docker-compose.yml
└── setup.sh
```

## Tecnologias Utilizadas

- NestJS
- MongoDB
- Docker
- TypeScript
- Mongoose 