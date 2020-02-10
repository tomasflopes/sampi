# Sampi

## Objetivo

Este projeto tem como objetivo ser a minha Prova de Aptidão Tecnológica (PAT) a realizar no final do ano letivo 2019/2020.

## Descrição do projeto

A ideia do projeto é ter uma plataforma móvel capaz de gerir uma competição entre um grupo de amigos que joguem futebol em conjunto regularmente.

A aplicação tem a tarefa de gerar novas equipas cada vez que os jogadores marcarem um novo evento de maneira a todos os jogadores terem várias equipas ao longo do tempo.

Desta forma, será possível com o passar dos eventos determinar quem é o jogador que se destaca mais independentemente da equipa em que joga.

## Tecnologia utilizada

Para realizar este projeto decidi utilizar a framework [React Native](https://facebook.github.io/react-native/), que é a mesma framework utilizada pelo Facebook em todas as suas apps, visto que é uma framework que utiliza **_JavaScript_** que é, de momento, a linguagem com mais procura no mercado de trabalho.

Em termos de base de dados decidi utilizar a plataforma [Firebase](https://console.firebase.google.com/u/1/project/sampi-42f48/overview?pli=1) da Google.

Para o planeamento de todas as atividades estou a usar o [Trello](https://trello.com/b/NzGBlb8O/sampi) e para o controlo de versões o [GitLab](https://gitlab.com/tomas050302/sampi).

### _For developers_

### Yarn

Uma ferramenta importante para trabalhar neste projeto é o _package manager_ [yarn](https://yarnpkg.com/en/) que serve para gerir todas as dependências do projeto. Para o instalar na máquina local só é necessário correr os seguintes comandos na CL

#### `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`

#### `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

#### `sudo apt update && sudo apt install yarn`

### Node

Também importante obviamente é o [Node JS](https://nodejs.org/en/) que é o que torna possível executar código _JavaScript_ fora do navegador de maneira a ser possível interpretar _React Native_, para o instalar só é necessário rodar o comando

#### `pkg install node`

Para ter a certeza que a versão instalada é pelo menos a exigída pelas dependências (neste projeto está a ser usada a versão estável a 13/01/2020 (_*12.14.1*_)) utilizamos os seguintes comandos

#### `sudo npm install -g n`

#### `sudo n stable`

Para iniciar o projeto é apenas necessário clonar o projeto diretamente do GitLab para a máquina local

#### `git clone git@gitlab.com:tomas050302/sampi.git`

De seguida é importante instalar todas as dependências

#### `yarn`

Para correr o programa no emulador ou num dispositivo físico previamente configurado só é necessário

#### `yarn start`

### Dependências do projeto

#### _Commitizen_

Esta dependência serve para uniformizar todos os commits realizados para o GitLab de maneira a ser mais simples de saber o que cada alteração fez no código e seguir o progresso do projeto.
