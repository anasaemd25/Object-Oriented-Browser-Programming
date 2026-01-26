/*
Ex4 Functions processing objects (Funciones procesando objetos)

Objetivo:
Expandir la solución anterior escribiendo una función 'printStudentGPAInfo' que:
1. Acepte un objeto estudiante.
2. Imprima “XXX (ID: YYYY) has GPA of ZZZ”.
*/

let student = {
    name: "Joe",
    studentId: 1234,
    grades: [3.39, 4.2, 4, 5] // Array de notas decimales
};

// Función auxiliar para calcular el promedio (reutilizada).
function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    let avg = sum / arrayOfNumbers.length;
    return avg; // Retorna el valor numérico
}

// Función principal que procesa el objeto estudiante.
function printStudentGPAInfo(studentObject) {
    // 1. Calculamos el promedio pasando SOLAMENTE la propiedad .grades (que es un array) a la función de cálculo.
    let gpa = calculateAverage(studentObject.grades);

    // 2. Imprimimos el resultado formateado.
    // .toFixed(2) es un método de los números que devuelve un STRING con exactamente 2 decimales.
    // Ej: si gpa es 4.1475, gpa.toFixed(2) devuelve "4.15".
    console.log(studentObject.name + " (ID: " + studentObject.studentId + ")" + " has a GPA of " + gpa.toFixed(2))
}

// Llamada a la función pasando el objeto 'student' completo.
printStudentGPAInfo(student);
