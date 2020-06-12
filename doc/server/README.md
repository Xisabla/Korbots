[korbots-server](README.md) › [Globals](globals.md)

# korbots-server

# Korbots ![GitHub Workflow Status](https://img.shields.io/github/workflow/status/Xisabla/Korbots/Build?style=for-the-badge) ![GitHub last commit](https://img.shields.io/github/last-commit/Xisabla/Korbots?style=for-the-badge)

## What is *Korbots* ?

[Korbots](https://github.com/Xisabla/Korbots/) (initially called *MyPage*) is school project written in Node.js, which has as propose to offer a personnal page to the user using APIs to fetch information all around the web and perform post-processing operations.

![korbots-preview](https://i.imgur.com/7VPdGtv.png)

## Requirements

- Node.js >= 12.x
- The `.env` file inside `server`: [see here](server/.dev.env)
- A [MongoDB](https://www.mongodb.com/) server

### Getting started

## Quick start

```bash
npm install         # Install both client and server dependencies
npm run start       # Build the client bundle, build the server files, run the server
```

Check the [build workflow details](#build-workflow) and the [running commands details](doc/run.md)

## Documentation

### Build workflow

See [here](doc/build.md)

### Source documentation

See [here](doc/server/globals.md)

## Technologies and main libraries

|    Name    | Client | Server | Description                                     |
|:----------:|:------:|:------:|-------------------------------------------------|
|    [debug](https://www.npmjs.com/package/debug)   |        |    ✓   | JavaScript debugging utility                    |
|   [eslint](https://eslint.org/)   |    ✓   |    ✓   | Linting tool for JavaScript                     |
|   [express](https://expressjs.com/)  |        |    ✓   | Web framework for Node.js                       |
|   [MongoDB](https://www.mongodb.com/)  |        |    ✓   | Document-based database                         |
|  [mongoose](https://mongoosejs.com/)  |        |    ✓   | MongoDB object modeling for Node.js             |
|    [react](https://reactjs.org/)   |    ✓   |        | JavaScript library for building user interfaces |
|  [socket.io](http://socket.io/) |    ✓   |    ✓   | Real-time web engine                            |
|   [typedoc](https://typedoc.org/)  |        |    ✓   | Documentation generator for TypeScript projects |
| [typescript](https://www.typescriptlang.org/) |        |    ✓   | Typed superset of JavaScript                    |
|   [webpack](http://webpack.js.org/)  |    ✓   |        | Bundler for JavaScript                          |

## Contributors

- BAJEUX Oregane
- BUCAMP Charles
- DALMAS Eugenie
- DEFOORT Nicolas
- DELEFORGE Charles
- MIQUET Gautier

## LICENSE

This project is under the [MIT License](LICENSE)
