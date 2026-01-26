// ==========================================
// EXTRAER SUB-CADENAS
// ==========================================

let str = "Javascript is fun";

// --- MÉTODO 1: SPLIT ---
// divide la cadena en un ARRAY de palabras basándose en el separador (espacio " ").
// "Javascript is fun" -> ["Javascript", "is", "fun"]
// Índices:                    0          1      2

let result = str.split(" ");
console.log(result[1]); // Accedemos al índice 1: "is"


// --- MÉTODO 2: SUBSTRING ---
// .substring(inicio, [fin]) extrae caracteres desde el índice 'inicio' hasta 'fin' (no incluido).
// Si se omite 'fin', extrae hasta el final de la cadena.

let ex4Satrt = "Javascript is fun";

// Índices:
// J a v a s c r i p t    i  s     f  u  n
// 0 1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16

// Queremos extraer desde el índice 11 ("i") en adelante.
let extractResult = ex4Satrt.substring(11);

console.log(extractResult); // "is fun"