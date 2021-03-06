# Facile-Challenge
#### by Victor Santos

> Esse é meu projeto de um desafio para vaga back-end, onde é exigido que se cadastre no banco de dados uma string criptograda e quando consultada por id, retornar a string descriptografada


## Tecnologias Utilizadas
- Typescript
- NodeJS
- NestJS
- Postgresql
- Crypto
- Prisma
- Hospedagem na Heroku (link: https://facile-challenge-victor.herokuapp.com)
- Banco de dados na nuvem ( Heroku Postgres)

# Como instalar?

1° Passo - Clone o repositório localmente no diretório desejado.
```
https://github.com/tckthecreator/facile-challenge.git
```

2° Passo - Com o seu gerenciador de pacotes favorito, instale todas as dependências.

```
npm install
```

3° Passo - Atualize o prisma
```
npx prisma generate
```

4° Passo - Inicia o servidor em localhost:3000
```
npm start
```

# Usando o Postman 

1° Passo - Lembre de registar uma conta ou dar login pelo Google

2° Passo - Localize "Start with something new" e clique no botão "Create New"

3° Passo - No menu, escolha a opção "Http Request"

## Agora, vamos criar um registro no banco?

1° Passo - No botão dropdown, troque "GET" por "POST"

2° Passo - No "Enter Request URL" cole
```
https://facile-challenge-victor.herokuapp.com/encrypts/create
```

3° Passo - No menu abaixo do input, clique em "Body" e logo abaixo clique em "x-www-form-url-encoded"

4° Passo - Em "Keys" você adicionará os campos e em "Values" os valores

4.2° Passo - Lembre que o campo é: name

5° Passo - Após adicionar  o campo, clique no botão "Send", na área "Response" deverá ser retornado um Código 201 e os valores criados.

## Conferindo o registro criado

1° Passo - Mude o "POST" para "GET"

2° Passo - No "Enter Request URL" cole. OBS: no lugar do :id, coloque o id do registro
```
https://facile-challenge-victor.herokuapp.com/encrypts/:id
```

3° Passo - Agora só apertar o botão "Send" e aguardar a resposta

