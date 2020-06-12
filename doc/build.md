# Building

**Note about dependencies**: As the [`/client`](client) and [`/server`](server) folders are working like 2 different npm projects, the dependency installation process should be performed once in each folder. However you can just perform `npm install` into the root folder, this will do all the job.

## Client

Client source code, under [`/client/src`](/client/src/), is being transformed using [babeljs](http://babeljs.io/) to allow Node.js and Reactjs advanced code style (ES7+) and is bundled by [webpack](http://webpack.js.org/) into [`/client/public`](/client/public/) under the `dist` folder.

This process can be performed inside the root folder using:

```bash
npm run client-build
```

or into the [`/client`](client) folder using `npm run build`

You can also run the build in watching mode, it will rebuild every time that the code under [`/client/src`](/client/src/) will be modified:

```bash
npm run client-dev
```

or in the [`/client`](client) folder using `npm run dev`

## Server

Server source code, under [`/server/src`](/server/src/), is being compiled using [typescript](https://www.typescriptlang.org/) compiler. The output is under the `dist` folder.

This process can be performed in the root folder using:

```bash
npm run server-build
```

or in the [`/server`](client) folder using `npm run build`

## Performing from root folder

Each (useful) command of the building and running process can be performed under the root folder

- **Client only commands** (➡️ *commands under [`/client`](client) folder*)
    - `client-build` ➡️ `npm run build`
    - `client-clean` ➡️ `npm run clean`
    - `client-dev` ➡️ `npm run dev`
- **Server only commands** (➡️ *commands under [`/server`](server) folder*)
    - `server-build` ➡️ `npm run build`
    - `server-clean` ➡️ `npm run clean`
    - `server-start` ➡️ `npm run start`
    - `server-dev` ➡️ `npm run dev`
    - `server-doc` ➡️ `npm run doc`
- **Running both**
  - `start` ➡️ Bundle client first and then build and start the server
  - `dev` ➡️ Run client bundling in dev mode and server dev mode into **2 different threads**
  - `build` ➡️ Same as `start`
  - `clean` ➡️ Run client cleaning script and server cleaning script
  - `doc` ➡️ Same as `server-doc`

## Cleaning

All built and bundled files under [`/client`](client) and [`/server`](server) can be cleaned running:

- Under [`/client`](client) or [`/server`](server) folder
  - `npm run clean`
- Under the root folder
  - `npm run clean` - Cleans all
  - `npm run client-clean` - Cleans client only
  - `npm run server-clean` - Cleans server only