<h1 align="center">Welcome to Sampi 👋</h1>
<p>
  <a href="https://www.codacy.com/manual/tomas050302/sampi?utm_source=github.com&amp;utm_medium=referral&amp;utm_content=tomas050302/sampi&amp;utm_campaign=Badge_Grade">
    <img src="https://app.codacy.com/project/badge/Grade/48f27d2f9be641cb8502e2f491c8a5f3"/>
  </a>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: AGPL--3.0 License" src="https://img.shields.io/badge/License-AGPL--3.0 License-yellow.svg" />
  </a>
  <a href="https://twitter.com/tomas050302" target="_blank">
    <img alt="Twitter: tomas050302" src="https://img.shields.io/twitter/follow/tomas050302.svg?style=social" />
  </a>
  <a href="#" target="_blank">
    <img alt="Last Commit" src="https://img.shields.io/github/last-commit/tomas050302/sampi" />
  </a>
  <a href="#" target="_blank">
    <img alt="Issues" src="https://img.shields.io/github/issues/tomas050302/sampi" />
  </a>
</p>

> Sampi - MERN Project - Prova de Aptidão Tecnológica - 2020 

###### If you want you can access the full english version by clicking [here](README_eng.md)


## Author 👥

**Tomás Lopes > <tomas050302@gmail.com>**

* Twitter: [@tomas050302](https://twitter.com/tomas050302)
* Github: [@tomas050302](https://github.com/tomas050302)
## Contribuidores 👥

<img src="./contributors/tomas.jfif" target="_blank" href="https://github.com/tomas050302" alt="Tomás" width="80" style="border-radius: 200px;"/>
<img src="./contributors/miguel.jpg" target="_blank" href="https://github.com/esfoliante" alt="Miguel" width="80" style="border-radius: 200px;"/>

## Show your support

Give a ⭐️ if this project helped you!

Also a [Buy me a Coffee ☕](https://www.buymeacoffee.com/tomas050302)

***

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

**M**ongoDB → databases
**E**xpress → web APIs
**R**eact   → para criar a mobile app
**N**odeJS  → para ter tudo a funcionar direitinho

### _For developers_

#### Yarn

Uma ferramenta importante para trabalhar neste projeto é o _package manager_ [yarn](https://yarnpkg.com/en/) que serve para gerir todas as dependências do projeto. Para o instalar na máquina local só é necessário correr os seguintes comandos na CL

##### `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`

##### `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

##### `sudo apt update && sudo apt install yarn`

#### Node

Para instalar o [Node JS](https://nodejs.org/en/) na máquina só é necessário correr o comando:

##### `pkg install node`

Para ter a certeza que a versão instalada é pelo menos a exigída pelas dependências (neste projeto está a ser usada a versão estável a 13/01/2020 (_*12.14.1*_) utilizamos os seguintes comandos

##### `sudo npm install -g n`

##### `sudo n stable`

Para iniciar o projeto é apenas necessário clonar o projeto para a máquina local
De seguida é importante instalar todas as dependências

<<<<<<< HEAD
=======
##### `yarn`

Para correr o programa no emulador ou num dispositivo físico previamente configurado só é necessário

##### `yarn start`

>>>>>>> 9eb7f00fe5bdfee36a6e3b10ff931a978b7bafa0
### .Env

Existe um ficheiro cujo nome é .env.example que contem dummy data. Renomeia o ficheiro para .env e edita com os dados do teu servidor.

### Dependências do projeto

#### [_Commitizen_](https://github.com/commitizen/cz-cli)

Esta dependência serve para dar uma interface gráfica ao programador na altura de formar a sua mensagem de _commit_.
Em conjunto com o [**CommitLint**](https://github.com/conventional-changelog/commitlint) que serve para uniformizar todas as mensagens de commits realizadas para o repositório __Git__, de maneira a ser mais simples de saber o que cada alteração fez no código e seguir a evolução do projeto ao longo do tempo.

#### [_Jest_](https://jestjs.io/)

Esta library de _JavaScript_ serve para ser possível criar testes automatizados de todos os módulos implementados no código. Desta forma podemos assegurar que nada do que já está implementado se danifica com a implementação de uma nova _feature_.
Com o Jest é também usada a library [**Supertest**](https://github.com/visionmedia/supertest) que serve para simular requests http nos testes do Jest. Também optei por incluir a dependência [**Faker**](https://github.com/marak/Faker.js/) que serve para gerar dados falsos para propósito de teste.

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
