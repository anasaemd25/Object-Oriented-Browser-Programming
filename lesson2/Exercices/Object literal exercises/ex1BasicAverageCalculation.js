// ==========================================
// EJERCICIO 1: CÁLCULO BÁSICO DE PROMEDIO
// ==========================================

// Declaración de variables numéricas usando 'let'.
// Cada variable almacena un número individual.
let num1 = 5;
let num2 = 6;
let num3 = 9;
let num4 = 3;
let num5 = 4;

// 'count' almacena la cantidad total de números que tenemos.
// Se usará como divisor para calcular el promedio.
let count = 5;

// Cálculo de la suma total.
// Se suman los valores de todas las variables numéricas.
let sum = num1 + num2 + num3 + num4 + num5;

// Cálculo del promedio (media aritmética).
// Fórmula: Suma Total / Cantidad de Elementos
let average = sum / count;

// Salida por consola.
// El operador '+' aquí actúa como concatenación porque uno de los operandos es un String ("The average is: ").
// Convierte automáticamente el número 'average' a string y los une.
console.log("The average is: " + average);