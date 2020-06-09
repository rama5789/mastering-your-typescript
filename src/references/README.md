# TypeScript :
* __TypeScript__ is an open-source, __object-oriented__ programing language.
* __TypeScript__ is a __static typed__ and __strongly typed__ superset of __JavaScript__ which compiles to plain JavaScript.
* It is a language for application-scale JavaScript development, which can be executed on any browser, any Host, and any Operating System.
* __TypeScript code__ is *not executed on any browsers directly*. The code written in TypeScript is __compiled__ and __converted__ into its __JavaScript__ equivalent for the execution. This process is known as __Transpilation__. With the help of JavaScript code, browsers can read the TypeScript code and display the output.

# Components of TypeScript :
The TypeScript language is internally divided into 3 main layers:

1. Language
    * It features the TypeScript language elements. It comprises elements like syntax, keywords, and type annotations.
2. The TypeScript Compiler
    * The TypeScript compiler (TSC) transform the TypeScript program equivalent to its JavaScript code. It also performs the parsing, and type checking.
    * We can compile the TypeScript file by running __tsc__ command on the command line.
    ```javascript
    $ tsc helloworld.ts // It compiles the TS file helloworld into the helloworld.js file.  
    ```
    ### Compiler Configuration :
    * The TypeScript compiler configuration is given in __tsconfig.json__ file and looks like the following:
    ```javascript
    // generate compiler configuration file
    $ tsc --init

    // tsconfig.json
    {  
        "compilerOptions": {  
            "declaration": true,  
            "emitDecoratorMetadata": false,  
            "experimentalDecorators": false,  
            "module": "none",  
            "moduleResolution": "node",  
            "noFallthroughCasesInSwitch": false,  
            "noImplicitAny": false,  
            "noImplicitReturns": false,  
            "removeComments": false,  
            "sourceMap": false,  
            "strictNullChecks": false,  
            "target": "es3"  
        },  
        "compileOnSave": true  
    }    
    ```
    ### Declaration file :
    * When we compile the TypeScript source code, it gives an option to generate a declaration file with the extension .d.ts. This file works as an interface to the components in the compiled JavaScript. If a file has an extension .d.ts, then each root level definition must have the declare keyword prefixed to it. It makes clear that there will be no code emitted by TypeScript, which ensures that the declared item will exist at runtime. The declaration file provides IntelliSense for JavaScript libraries like jQuery.

3. The TypeScript Language Services
    * The language service provides information which helps editors and other tools to give better assistance features such as automated refactoring and IntelliSense. It exposes an additional layer around the core-compiler pipeline. It supports some standard typical editor operations like code formatting and outlining, colorization, statement completion, signature help, etc.

# TypeScript Installation :
```javascript
// install using npm
$ npm i typescript --save-dev     // As dev dependency  
$ npm i typescript -g             // As a global module  
$ npm i typescript@latest -g      // Install latest if you have an older version  

// check version
$ tsc -v    // Version 3.9.3
```