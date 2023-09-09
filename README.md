
# Validador de CSV para atualização do Banco de Dados

Projeto teste de vaga Fullstack para Shopper.com.br


## Instalação de Ambiente

Utilizando Linux, instale o Docker para criar o container e iniciar o banco de dados, por meio do arquivo yml salvo na pasta db.


```bash
  cd /db
  docker compose up
```
- Com o container criado e o servidor ativo, faça a conexão com a porta 3309 no MySQL.
- Instale as dependências na pasta backend
```bash
  cd /Backend
  npm install
```

- No terminal dentro da pasta ./Backend, faça a migração do Banco de Dados com o Prisma
```bash
  npx prisma migrate dev
```
- Após a instalação das dependências, inicie o servidor.

```bash
  npm run start
```
- Na pasta ./Frontend, faça a instalação das dependências e depois inicialização da página.
```bash
  cd /Frontend
  npm install
  npm run start
```
- A aplicação utilizará a porta 3000 para inicializar.


## Documentação de referência

[Docker](https://docs.docker.com/get-docker/)

[Prisma](https://www.prisma.io/docs)

[React](https://react.dev/learn)

[Node.JS](https://nodejs.org/en/docs)

