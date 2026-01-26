// ==========================================
// INTRODUCCIÓN A TYPESCRIPT: TIPOS BÁSICOS
// ==========================================

// TypeScript es un "superset" (superconjunto) de JavaScript.
// Añade tipado estático opcional.

// Inferencia de tipos:
// Aunque no pongamos el tipo, TS adivina que 'a' es un número porque le asignamos 5.
let a = 5;

// Tipado explícito:
// Usamos : tipo para forzar que 'b' sea siempre un número.
// Si intentáramos: let b: number = "hola"; -> Error.
let b: number = 10;


// Funciones con tipos:
// Definimos que 'param1' y 'param2' DEBEN ser números.
// Definimos (implícita o explícitamente) que la variable interna 'result' es number.
function calSum(param1: number, param2: number) {

    let result: number = param1 + param2;

    console.log(result);
}

calSum(a, b);