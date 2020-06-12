# Running

While running *korbots-server* you are able to see some logging information, that can be filtered using [`debug`](https://www.npmjs.com/package/debug).

Basically, `npm run start` shows the information under the "core" namespace, to see all of the most important information perform `npm run dev`

**Note**: `npm run start` (under the *server* folder) automatically perform `npm run build` before starting, but won't bundle the client sources. For this, you should use the [start script under the root folder](./build.md#performing-from-root-folder)