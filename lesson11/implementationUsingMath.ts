import horse from "./mathFuncs.ts";

import {minus, multiply} from "./mathFuncs.ts";

let a = 8;
let b = 2;

let c = horse(a, b);
console.log(`The sum of ${a} and ${b} is ${c}`);


console.log(`The difference of ${a} and ${b} is ${minus(a, b)}`);    

console.log(`The product of ${a} and ${b} is ${multiply(a, b)}`);

