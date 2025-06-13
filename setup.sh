#!/bin/bash

# Instalar dependências do serviço de Livros
cd Livros
npm install @nestjs/config
cd ..

# Instalar dependências do serviço de Reservas
cd Reserva_Livros
npm install @nestjs/config
cd ..

# Construir e iniciar os containers
docker-compose up --build 