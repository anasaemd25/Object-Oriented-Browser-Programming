// this is the syntax for importing the default export from mathFuncs.ts
import horse from './mathFuncs.ts'

// here we have a named export from mathFuncs.ts
import { minus, multiply } from './mathFuncs.ts'

let a = 8;
let b = 3;

let c = horse(a, b);
console.log(`The sum of ${a} and ${b} is ${c}`);

console.log(`The difference of ${a} and ${b} is ${minus(a, b)}`);

console.log(`The product of ${a} and ${b} is ${multiply(a, b)}`);