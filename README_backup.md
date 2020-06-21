# Sampi

## Objetivo

Este projeto tem como objetivo ser a minha Prova de Aptidão Tecnológica (PAT) a realizar no final do ano letivo 2019/2020.

## Descrição do projeto

A ideia do projeto é ter uma plataforma móvel capaz de gerir uma competição entre um grupo de amigos que joguem futebol em conjunto regularmente.

A aplicação tem a tarefa de gerar novas equipas cada vez que os jogadores marcarem um novo evento de maneira a todos os jogadores terem várias equipas ao longo do tempo.

Desta forma, será possível, com o passar dos eventos, determinar quem é o jogador que se destaca mais, independentemente da equipa em que joga.

### Design

Todo o design foi concebido por mim e foi utilizada a ferramenta [**Figma**](https://www.figma.com), e está acessível [neste link](https://www.figma.com/file/L4uZDocj3GfuzbzvTzwuuW/Sampi?node-id=0%3A1).

### Stack

O projeto é baseado numa _stack_, ou seja, um conjunto de tecnologias, muito popular entre as empresas de tecnologia hoje em dia, **MERN**.

**M**ongoDB
**E**xpress
**R**eact
**N**odeJS

#### MongoDB

Em termos de base de dados decidi utilizar a plataforma [MongoDB](https://www.mongodb.com/), uma base de dados _noSQL_ orientada a documento que tem muitas vantagens em relação a bases de dados relacionais a nível de performance.

#### Express

Para _web framework_ decidi usar o **Express**, uma framework que dá uma base muito robusta para operações com o protocolo **http**.

#### React-Native

Para realizar este projeto decidi utilizar a framework [React Native](https://facebook.github.io/react-native/), que é a mesma framework utilizada pelo Facebook em todas as suas apps, visto que é uma framework que utiliza **_JavaScript_** que é, de momento, a linguagem com mais procura no mercado de trabalho.

#### NodeJS

E por fim o **NodeJS** que é o _runtime_ Javascript que torna possível executar código Javascript fora do browser.

Todas estas tecnologias previligiam uma *API* **RESTFULL**. Que é uma aplicação que obedece aos padrões **REST**, **RE**presentational **S**tate **T**ransfer, padrões que podem ser encontrados [aqui](https://restfulapi.net/).

## Tecnologia utilizada

### Planeamento e _versioning_

Além de muito papel e quadros cheios de ideias e tarefas foi também utilizada a ferramenta online [Trello](https://trello.com/b/NzGBlb8O/sampi) e para o controlo de versões o [GitLab](https://gitlab.com/tomas050302/sampi).

### _For developers_

### Yarn

Uma ferramenta importante para trabalhar neste projeto é o _package manager_ [yarn](https://yarnpkg.com/en/) que serve para gerir todas as dependências do projeto. Para o instalar na máquina local só é necessário correr os seguintes comandos na CL

#### `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`

#### `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

#### `sudo apt update && sudo apt install yarn`

### Node

Para instalar o [Node JS](https://nodejs.org/en/) na máquina só é necessário correr o comando:

#### `pkg install node`

Para ter a certeza que a versão instalada é pelo menos a exigída pelas dependências (neste projeto está a ser usada a versão estável a 13/01/2020 (_*12.14.1*_) utilizamos os seguintes comandos

#### `sudo npm install -g n`

#### `sudo n stable`

Para iniciar o projeto é apenas necessário clonar o projeto diretamente do GitLab para a máquina local

#### `git clone git@gitlab.com:tomas050302/sampi.git`

De seguida é importante instalar todas as dependências

#### `yarn`

Para correr o programa no emulador ou num dispositivo físico previamente configurado só é necessário

#### `yarn start`

### .Env

Este ficheiro tem de ser ignorado nos commits devido a conter nele informação sensível que poderia ser explorada por pessoas mal intencionadas, com isto em mente, é ignorada em todos os commits. Tomei, no entanto, a liberdade de deixar um .env_temp para servir de template a quem quiser testar a aplicação no seu próprio ambiente de desenvolvimento com todas as indicações necessárias a seguir para ser possível preencher com os dados pessoais.

### Dependências do projeto

#### [_Commitizen_](https://github.com/commitizen/cz-cli)

Esta dependência serve para dar uma interface gráfica ao programador na altura de formar a sua mensagem de _commit_.
Em conjunto com o [**CommitLint**](https://github.com/conventional-changelog/commitlint) que serve para uniformizar todas as mensagens de commits realizadas para o repositório __Git__, de maneira a ser mais simples de saber o que cada alteração fez no código e seguir a evolução do projeto ao longo do tempo.

#### [_Jest_](https://jestjs.io/)

Esta library de _JavaScrip_ serve para ser possível criar testes automatizados de todos os módulos implementados no código. Desta forma podemos assegurar que nada do que já está implementado se danifica com a implementação de uma nova _feature_.
Com o Jest é também usada a library [**Supertest**](https://github.com/visionmedia/supertest) que serve para simular requests http nos testes do Jest. Também optei por incluir a dependência [**Faker**](https://github.com/marak/Faker.js/) que serve para gerar dados falsos para propósito de teste.

