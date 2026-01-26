// ==========================================
// FUNDAMENTOS DE JAVASCRIPT: TIPOS DE DATOS
// ==========================================

// --- VARIABLES Y TIPOS PRIMITIVOS ---
// 'let' es una palabra clave moderna (ES6) para declarar variables que pueden ser reasignadas.
// A diferencia de 'var', 'let' tiene alcance de bloque (block scope).

let x = 5; // Aquí declaramos una variable 'x' y le asignamos un valor numérico entero (Number).
let y;     // Declaramos 'y' pero no le asignamos valor. Su valor por defecto es 'undefined'.
let z = true;  // 'z' es un valor Booleano (Boolean), que puede ser true (verdadero) o false (falso).
let k = false; // 'k' es otro valor Booleano.

// --- EL OPERADOR TYPEOF ---
// 'typeof' es un operador unario que devuelve una cadena (string) indicando el tipo de dato del operando.
console.log(typeof x); // Imprime "number" porque 5 es un número.
console.log(typeof y); // Imprime "undefined" porque 'y' no tiene valor asignado.
console.log(typeof z); // Imprime "boolean".
console.log(typeof k); // Imprime "boolean".


// --- VALORES TRUTHY Y FALSY (VERDADERO O FALSO EN CONTEXTO BOOLEANO) ---
// En JavaScript, todos los valores tienen un valor booleano inherente cuando se evalúan en una condición (como un if).

let testValue = undefined;  
// Valores que se evalúan como FALSE (Falsy values):
// - false
// - 0 (cero)
// - "" (cadena vacía)
// - null
// - undefined
// - NaN (Not a Number)

if(testValue){
    // Este bloque NO se ejecutará porque 'undefined' es falsy.
    console.log("This is true");
} else{
    // Este bloque SÍ se ejecutará.
    console.log("This is false");
}

let test2Value = "Hello";  
// Valores que se evalúan como TRUE (Truthy values):
// - Cualquier string no vacío (" ", "0", "false")
// - Cualquier número diferente de 0 (1, -1, 3.14)
// - true
// - Objetos y arrays (incluso vacíos)

if(test2Value){
    // "Hello" es una cadena no vacía, por lo tanto es truthy.
    console.log("This is true");
} else{
    console.log("This is false");
}


// --- NÚMEROS Y PRECISIÓN ---
// En JS, todos los números son de punto flotante de doble precisión (64-bit).

// Number.MAX_SAFE_INTEGER es el entero más grande que JavaScript puede representar con precisión exacta.
// Equivale a 2^53 - 1.
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991

let max = 9007199254740991;

let beyondMax1 = max + 1; // 9007199254740992 (Aún seguro)
let beyondMax2 = max + 2; // 9007199254740993 (Pérdida de precisión)

console.log(beyondMax1);
console.log(beyondMax2); // Cuidado: Imprimirá lo mismo que beyondMax1 debido a la pérdida de precisión.

// Al comparar, esto devuelve true erróneamente porque, internamente, ambos valores son idénticos por la falta de bits para representar el último dígito.
console.log(beyondMax1 === beyondMax2); 

// --- SISTEMAS DE NUMERACIÓN ALTERNATIVOS ---

// HEXADECIMAL (Base 16)
// Prefijo: 0x
let hexValue = 0xFF // FF en hex es 255 en decimal (15*16 + 15).
console.log(hexValue);

// BINARIO (Base 2)
// Prefijo: 0b
let binaryValue = 0b1010 // 1010 en binario es 10 en decimal (8 + 0 + 2 + 0).
console.log(binaryValue);

// OCTAL (Base 8)
// Prefijo: 0o
let octalValue = 0o10; // 10 en octal es 8 en decimal (1*8 + 0).
console.log(octalValue); // Nota: solo acepta dígitos del 0 al 7.


// --- BIGINT (ENTEROS GRANDES) ---
// Nuevo tipo de dato para representar enteros arbitrariamente grandes, más allá de MAX_SAFE_INTEGER.
// Se crea añadiendo una 'n' al final del número.

let bigIntValue = 2134243232532412243253n;
console.log(typeof bigIntValue); // "bigint"

// Operaciones con BigInt
console.log(bigIntValue + 2n); // Se puede sumar otro BigInt.
console.log(bigIntValue + 4n);

// NOTA: No se pueden mezclar tipos Number y BigInt directamente (ej: bigIntValue + 2 daría error).


// --- STRINGS (CADENAS DE TEXTO) ---

let str1 = "Hello world"; // Comillas dobles
// Método split(): Divide un string en un array de substrings usando un separador (aquí un espacio).
let results = str1.split(" "); 
console.log(results); // ["Hello", "world"]

// Propiedad length: Devuelve el número de caracteres en el string.
console.log(str1.length); // 11

// Acceso a caracteres individuales (índice base 0)
console.log(str1[0]); // "H" (primer carácter)
console.log(str1[1]); // "e" (segundo carácter)

let str2 = 'single quote str' // Comillas simples (funcionan igual que las dobles)

// --- TEMPLATE LITERALS (PLANTILLAS DE CADENA) ---
// Usan comillas invertidas (backticks) ` `
// Permiten interpolación de expresiones con ${...}

let str3 = `Values of x is ${x}`; // Inserta el valor de la variable x directamente.
console.log(str3); // "Values of x is 5"
