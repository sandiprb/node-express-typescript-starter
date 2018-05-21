# node-express-typescript-starter
Starter kit to build Express apps on node with typescript

<br/>

### Directory Structure

```
package.json          # Package file
tsconfig.json         # root TypeScript Config
server
  /src
    tsconfig.json     # server specific TS Config (extends root config)
    index.ts          # App Index File
    app.ts            # Express Initialiser
    views/index.ts    # Views for all routes
  /dist               # gitignored (ts to js transpiled files goes in here)
```

<br/>

### Build Commands
```
npm run server-build      # transpile ts to js

npm run server-watch-ts   # transpiler in watch mode

npm run server-dev        # transpile in watch mode & reload server on changes (using nodemon)

npm run server-run        # transpile ts to js & start server
```
