let x = 5;
let y;
let z = true;
let k = false;

console.log(typeof x);
console.log(typeof y);
console.log(typeof z);
console.log(typeof k);


let testValue = undefined;  // null, 0, "", undefined
if(testValue){
    console.log("This is true");
} else{
    console.log("This is false");
}

let test2Value = "Hello";  // " ", "1"...
if(test2Value){
    console.log("This is true");
} else{
    console.log("This is false");
}


console.log(Number.MAX_SAFE_INTEGER);

let max = 9007199254740991;

let beyondMax1 = max + 1;
let beyondMax2 = max + 2;
console.log(beyondMax1);
console.log(beyondMax2); // same as beyondMax1

console.log(beyondMax1 === beyondMax2);

// HEX
let hexValue = 0xFF //255 in decimal
console.log(hexValue);

// Binary
let binaryValue = 0b1010 // 10 in decimal
console.log(binaryValue);

// Octal
let octalValue = 0o10; // From 0 to 7
console.log(octalValue);

//BigInt
let bigIntValue = 2134243232532412243253n;
console.log(typeof bigIntValue);
console.log(bigIntValue + 2n);
console.log(bigIntValue + 4n);

let str1 = "Hello world";
let results = str1.split(" ");
console.log(results);
console.log(str1.length);

console.log(str1[0]);
console.log(str1[1]);

let str2 = 'single quote str'

// template literals
let str3 = `Values of x is ${x}`;
console.log(str3);
