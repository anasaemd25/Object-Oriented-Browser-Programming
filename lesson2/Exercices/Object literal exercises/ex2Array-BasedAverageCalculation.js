// ==========================================
// EJERCICIO 2: CÁLCULO DE PROMEDIO BASADO EN ARRAYS
// ==========================================

// Declaración de Arrays (Arreglos).
// Un array es una lista ordenada de valores.
// Se definen usando corchetes [] y separando los elementos por comas.
let numbers = [5, 11, 3, 1, 7]; // Array 'numbers' con 5 elementos.
let someOtherNumbers = [44, 22, 1, 56, 223, 5, 3, 33]; // Otro array con más elementos.

// --- PARTE A: Cálculo manual usando un bucle ---

let sum = 0; // Inicializamos la suma en 0.

// Bucle 'for' para recorrer el array 'numbers'.
// SINTAXIS: for (inicialización; condición; actualización)
// 1. let i = 0: Empezamos con el índice 0 (primer elemento).
// 2. i < numbers.length: El bucle continúa mientras 'i' sea menor que la longitud del array.
// 3. i++: Incrementamos 'i' en 1 en cada iteración.
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Accedemos al elemento en la posición 'i'.

    // Operador de asignación de suma (+=).
    // Es equivalente a: sum = sum + numbers[i];
    sum += numbers[i];
}

// Calculamos el promedio dividiendo la suma total por la cantidad de elementos (.length).
let avg = sum / numbers.length;
console.log('AVG of numbers is: ' + avg);


// --- PARTE B: Uso de Funciones ---

// Definición de una función llamada 'calculateAverage'.
// Acepta un parámetro 'arrayOfNumbers' (se espera que sea un array).
// Encapsular la lógica en una función nos permite reutilizarla con diferentes datos.
function calculateAverage(arrayOfNumbers) {
    let sum = 0; // Variable local 'sum' (diferente a la de arriba debido al ámbito/scope de la función).

    // Recorremos el array que se pasó como argumento.
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        console.log(arrayOfNumbers[i]);
        sum += arrayOfNumbers[i]; // Acumulamos la suma.
    }

    // Calculamos el promedio.
    let avg = sum / arrayOfNumbers.length;

    // Devolvemos el resultado al lugar donde se llamó la función.
    return avg;
}

// Llamada a la función pasándole el array 'someOtherNumbers'.
// El valor que devuelve la función (el promedio) se concatena con el string y se imprime.
console.log('AVG of someOtherNumbers is: ' + calculateAverage(someOtherNumbers));
