# TypeScript Types :
The TypeScript language supports different types of values. It provides __data types__ for the JavaScript to transform it into a __strongly typed__ programing language. 

* Basic | Static
    * Built-In or Primitive - *number, string, boolean, void, null, undefined, any*
    * User-Defined - *Array, Tuple, Enum, Function, Class, Interface*
* Generics
* Decorators

# 1. Basic | Static Types :
In the context of type systems, __static types__ mean __at compile time__ or __without running a program__. In a statically typed language, variables, parameters, and objects have types that the compiler knows at compile time. The compiler used this information to perform the type checking.

Static types can be further divided into 2 sub-categories:

## A. Built-in or Primitive Type :
### 1. Number :
* Like JavaScript, all the numbers in TypeScript are stored as __floating-point__ values.
* These numeric values are treated like a __number data type__.
* The numeric data type can be used to represents both integers and fractions.
* TypeScript also supports Binary(Base 2), Octal(Base 8), Decimal(Base 10), and Hexadecimal(Base 16) literals.
```javascript
// Syntax: 
// let identifier: number = value;
// const identifier: number = value;  

let decimal: number = 6;
let hex: number = 0xf00d;
let binary: number = 0b1010;
let octal: number = 0o744;

console.log(decimal); // 6
console.log(hex); // 61453
console.log(binary); // 10
console.log(octal); // 484
```
### 2. String :
*  String type work with textual data.
```javascript
// Syntax: 
// let identifier: string = 'text';  

let str: string = 'Sachin';

console.log(str); // Sachin
```
### 3. Boolean :
```javascript
// Syntax: 
// let identifier: boolean = true;  // or, false

let bool: boolean = true;

console.log(bool); // true
```
### 4. Void :
* __void__ is a little like the __opposite__ of __any:__ the *absence of having any type* at all. You may commonly see this as the return type of functions that do not return a value.
* Declaring variables of type void is *not useful* because you can only assign __null__ (only if __--strictNullChecks__ is not specified) or __undefined__ to them.
```javascript
// Syntax: 
// let unusable: void = undefined;  // or, null

let unusable: void = undefined;
console.log(unusable);  // undefined

unusable = null;    // OK if `--strictNullChecks` is not given
console.log(unusable);  // null

unusable = 'value'; // Error: Type '"value"' is not assignable to type 'void'.
```
### 5. Null and Undefined :
* In TypeScript, both __undefined__ and __null__ actually have their own types named __undefined__ and __null__ respectively. Much like void, they’re *not extremely useful* on their own.
* An __undefined__ data type denotes *uninitialized variable*, whereas __null__ represents a *variable whose value is undefined*.
```javascript
// Syntax: 
// Not much else we can assign to these variables!
let und: undefined = undefined;
let nul: null = null;
console.log(und);  // undefined
console.log(nul);  // null

und = null;
nul = undefined;
console.log(und);  // null
console.log(nul);  // undefined
```
### 6. Any :
* It is the __super type__ of all data type in TypeScript and used to represents *any JavaScript value*.
* If a variable cannot be represented in any of the basic data types, then it can be declared using __Any__ data type. Any type is useful when we do not know about the type of value (which might come from an API or 3rd party library), and we want to skip the type-checking on compile time.
```javascript
// Syntax: 
// let identifier: any = value;

let notSure: any = 4;
console.log(notSure); // 4

notSure = "maybe a string instead";
console.log(notSure); // maybe a string instead

notSure = false;
console.log(notSure);  // false

console.log(notSure.ifItExists); // undefined

let notSureList: any[] = [1, true, "free"];
console.log(notSureList); // [ 1, true, 'free' ]

notSureList[1] = 100;
console.log(notSureList); // [ 1, 100, 'free' ]
```
## B. User-Defined Type :
### 1. Array :
* An __array__ is a __collection__ of *elements of the same data type*.
```javascript
// Syntax: 
// let identifier: number[] = [val1, val2, val3];
// let identifier: Array<number> = [val1, val2, val3];  // generic array type

const numList: number[] = [1, 2, 3];
console.log(numList);  // [ 1, 2, 3 ]

const strList: Array<string> = ['a', 'b', 'c'];
console.log(strList);  // [ 'a', 'b', 'c' ]
```
### 2. Tuple :
* Tuple types allow you to express an __array__ with a *fixed number of elements whose types are known, but need not be the same*.
```javascript
// Syntax: 
// let identifier: [string, number, boolean, ...] = [strVal, numVal, boolVal, ...];

let x: [string, number];

x = ['a', 10];
console.log(x);  // [ 'a', 10 ]

x = [20, "b"];  // Type 'number' is not assignable to type 'string'

x = ["a", 10, "b", 20]; // Type '[string, number, string, number]' is not assignable to type '[string, number]'.
```
### 3. Enum :
* Enums define a *set of named constant*.
```javascript
// Syntax: 
// let identifier: { key1 = val1, key2 = val2, key3 = val3 };

enum Color { Red, Green, Blue }
enum Color2 { Red = 3, Green, Blue = 10 }
enum Color3 { Red = 'red', Green = 4, Blue = 'blue' }

console.log(Color); // { '0': 'Red', '1': 'Green', '2': 'Blue', Red: 0, Green: 1, Blue: 2 }
console.log(Color2); // { '3': 'Red', '4': 'Green', '10': 'Blue', Red: 3, Green: 4, Blue: 10 }
console.log(Color3); // { '4': 'Green', Red: 'red', Green: 4, Blue: 'blue' }
```
### 4. Function :
* A function is the logical blocks of code to organize the program. 
* Like JavaScript, TypeScript can also be used to create functions either as a __named function__ or as an __anonymous function__.
* A function declaration has a function's name, return type, and parameters.
```javascript
// named function 
function add(a: number, b: number): number {  
    return a + b;  
}  
console.log(add(2,3));  // 5

// anonymous arrow function
let sum = (a: number, b: number = 5): number => a + b;
console.log(sum(3,4));  // 7
console.log(sum(3));  // 8
```
### 5. Class :
* Classes are used to create reusable components and acts as a template for creating objects.
* It is a logical entity which store variables and functions to perform operations.
* A __class__ has an implementation inside it, whereas an __interface__ does not have any implementation inside it.
```javascript
class Alphabet {
    private _a: number; // not accessible outside the class
    protected b: string;    // accessible by own instance and child instances
    c: boolean;  // accessible by own instance
    // public c: boolean;  // same as above
    static s: string = 'Static-S';  // accessible by the class only
    // public static s: string = 'Static-S';  // same as above

    constructor(a: number, b: string) {
        this._a = a;
        this.b = b;
    }

    // to access private _a field from own instance
    get a(): number {   // accessible by own instance
        return this._a;
    }
    set a(newA: number) {   // accessible by own instance
        this._a = newA;
    }
    private fnA() {}    // not accessible outside the class
    protected fnB() {}  // accessible by own instance and child instances
    fnC() {}    // accessible by own instance
    // public fnC() {} // same as above
    static fnS() {}  // accessible by the class only
    // public static fnS() {}  // same as above
}
console.log(Alphabet.s);
console.log(Alphabet.fnS());

let alphabet = new Alphabet(v1,v2); // Alphabet instance
console.log(alphabet.a); 
console.log(alphabet.b);
console.log(alphabet.c);
alphabet.fnB();
alphabet.fnC();
```
### 6. Interface :
* An __Interface__ is a structure which acts as a __contract__ in our application.
* It defines the syntax for classes to follow, means a class which implements an interface is bound to implement all its members.
* It cannot be instantiated but can be referenced by the class which implements it. 
* TypeScript compiler uses interface for type-checking that is also known as __duck typing__ or __structural subtyping__.
```javascript

```
# 2. Generics :
* __Generic__ is used to create a component which can work with *a variety of data type rather than a single one*.
* It allows a way to create reusable components. 
* TypeScript uses generics with the type variable <T> that denotes types. 
```javascript
function identityFn<T>(arg: T): T {  
    return arg;  
}  
let i1 = identityFn<string>("myString");  
let i2 = identityFn<number>(100);  
```
# 3. Decorators :
* A __decorator__ is a *special data type* which can be attached to a class declaration, method, property, accessor, and parameter. 
* It provides a way to add both annotations and a meta-programing syntax for classes and functions. 
* It is used with __"@"__ symbol.
* A decorator is an __experimental__ feature which may change in future releases. To enable support for the decorator, we must enable the __experimentalDecorators__ compiler option either on the command line or in our __tsconfig.json__.
```javascript
```