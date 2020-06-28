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


###### If you want you can access the full portuguese version by clicking [here](README.md)

## Author 👥

**Tomás Lopes > <tomas050302@gmail.com>**

* Twitter: [@tomas050302](https://twitter.com/tomas050302)
* Github: [@tomas050302](https://github.com/tomas050302)

## Contributors 👥

<img src="./contributors/tomas.jfif" target="_blank" href="https://github.com/tomas050302" alt="Tomás" width="80" style="border-radius: 200px;"/>
<img src="./contributors/miguel.jpg" target="_blank" href="https://github.com/esfoliante" alt="Miguel" width="80" style="border-radius: 200px;"/>

## Show your support

Give a ⭐️ if this project helped you!

Also a [Buy me a Coffee ☕](https://www.buymeacoffee.com/tomas050302) page coming soon!

***

## Objective

This project was created in order to be my PAT (Projeto de Aptidão Tecnológico), which is a final project that I had to develop in the years 2019/2020

## Description of the project

The idea of the project is to have an app capable of managing competitions and games in a group of friends that plays soccer regularly.
The app must also mix up the players in different teams everytime the a game is arranged in order for them to have different teammates throughout the games.

Because of that it's possible to check out who's the best player, the MVP, independently the team he plays on.

### Design

Everything in the design was concepted by me using the tool [**Figma**](https://www.figma.com), and you can check it out [here](https://www.figma.com/file/L4uZDocj3GfuzbzvTzwuuW/Sampi?node-id=0%3A1).

### Stack

The project is based on a _stack_, which is a group of technologies, very popular among companies nowadays, the **MERN stack**.

**M**ongoDB → databases
**E**xpress → web APIs
**R**eact   → to build the mobile app
**N**odeJS  → to get everything up and running

### _For developers_

#### Yarn

In order to manage all the dependecies you gotta have this _package manager_ [yarn](https://yarnpkg.com/en/) 
Here are the steps to install it

##### `curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | sudo apt-key add -`

##### `echo "deb https://dl.yarnpkg.com/debian/ stable main" | sudo tee /etc/apt/sources.list.d/yarn.list`

##### `sudo apt update && sudo apt install yarn`

#### Node

You also need to install [Node JS](https://nodejs.org/en/) in order to run the command:

##### `pkg install node`

To check if you have the required version for the dependecies (in this project is used the stable version _*12.14.1*_) we run:

##### `sudo npm install -g n`

##### `sudo n stable`

Then, after cloning the repo just run:

##### `yarn`

If you wanna run the app in a previously configured device run:

##### `yarn start`

If you want to run tests just type:

##### yarn test

### .Env

In order for the app to run you need to setup a .env file. There's a file called .env.example which contains dumy data; just rename it to .env and edit the data in it. 

### Dependências do projeto

#### [_Commitizen_](https://github.com/commitizen/cz-cli)

This dependecy helps the programmer giving him a visual interface when making a _commit_.
In junction with [**CommitLint**](https://github.com/conventional-changelog/commitlint) which helps us to follow a certain pattern when making our _commits_.

#### [_Jest_](https://jestjs.io/)

With this _JavaScript_ library we can create automatic tests for every new _feature_.
You can also use [**Faker**](https://github.com/marak/Faker.js/) which creates fake data in order to run the tests

_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_
