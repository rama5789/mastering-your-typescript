# How to RUN:
* $ npm install
* $ npm start

```javascript
// package.json

"scripts": {
    // remove dir
    "clean": "rimraf ./dist",

    // copy files from one dir to another
    "cp-public-dir": "ncp ./src/public/ ./dist/public/",

    // read ts compile options from tsconfig.json file and generate .js files
    "build": "npm run clean && tsc && npm run cp-public-dir",

    // only run .ts files, don't generate .js files
    "dev": "ts-node src/index.ts",

    // run generated .js files
    "prestart": "npm run build",
    "start": "node dist/index.js",

    // run generated .js files (without using tsconfig.json file)
    // "start": "tsc --target es5 --outDir dist src/index.ts && node dist/index.js",

    // format .ts files
    "format": "prettier \"**/*.ts\" --write"
}
```

# Tutorials : 
Typescript - https://www.typescriptlang.org/docs/handbook/basic-types.html

# Typescript References :
## Basic :
