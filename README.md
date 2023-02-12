# Desafio 01 - Database Queries

## 💻 Sobre o desafio

Nesse desafio, você realizará consultas no banco de dados com o TypeORM de três maneiras:

- Usando o ORM
- Usando Query Builder
- Usando Raw Query

Isso irá te ajudar a entender e exercitar os diferentes tipos de consultas que podemos fazer.

No template, você irá encontrar uma aplicação já estruturada (apenas as entidades e repositórios) onde você deverá completar o que falta nas consultas dos dois repositórios.

A aplicação possui dois módulos: `users` e `games`. Um **usuário** pode ter vários jogos e um mesmo **jogo** pode estar associado a vários usuários. 

## Preparando o ambiente para os testes

Para que os testes funcionem, é importante que você crie uma **database no banco Postgres** com o nome `queries_challenge` e substitua os dados de autenticação (caso os seus não sejam os mesmos) no arquivo **ormconfig.json**:

**Atenção**: Se você precisou mudar alguma informação no arquivo de configuração **ormconfig.json** para que fosse possível rodar os testes, é necessário que, antes de mandar na plataforma da Rocketseat, você volte esses dados ao padrão que veio do template. Caso contrário, os testes não irão rodar corretamente na plataforma.

## Repositórios da aplicação

Com o repositório criado a partir do template e clonado na sua máquina, navegue até os arquivos **src/modules/users/repositories/implementations/UsersRepository.ts** e **src/modules/games/repositories/implementations/GamesRepository.ts**. 
Esses deverão ser completados para que os testes sejam satisfeitos. 

Observe que alguns métodos já possuem parte do código inserido para indicar que você deve usar ORM, query builder ou raw query nas consultas.

### UsersRepository

- Método **findUserWithGamesById**
- Método **findAllUsersOrderedByFirstName**
- Método **findUserByFullName**

### GamesRepository

- Método **findByTitleContaining**
- Método **countAllGames**
- Método **findUsersByGameId**

## Específicação dos testes

Para esse desafio, temos os seguintes testes:

- **[UsersRepository] should be able to find user with games list by user's ID**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45).

- **[UsersRepository] should be able to list users ordered by first name**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45).

- **[UsersRepository] should be able to find user by full name**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui.](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)

- **[GamesRepository] should be able find a game by entire or partial given title**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)[.](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45)

- **[GamesRepository] should be able to get the total count of games**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45).

- **[GamesRepository] should be able to list users who have given game id**

    Para que esse teste passe, você deve satisfazer o código de acordo com o que é [descrito aqui](https://www.notion.so/Desafio-01-Database-Queries-8d97dae581d5446e97555c43d301ee45).

