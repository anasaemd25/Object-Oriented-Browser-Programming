/*
Ex3 Student Data with Object Literal (Introducción a los Objetos)
Objetivo:
Crear un objeto literal que represente a un estudiante con las propiedades:
· name - nombre (string)
· studentId - ID (número o string)
· grades - array de notas (array de números)

Tareas:
1. Crear el objeto estudiante.
2. Usar una función para calcular su promedio (GPA).
3. Mostrar el resultado.
*/

// --- CREACIÓN DE OBJETO LITERAL ---
// Un objeto agrupa datos relacionados usando pares clave: valor.
// Se define con llaves { }.
let student = {
    name: "Joe",        // Propiedad 'name' (String)
    studentId: 1234,    // Propiedad 'studentId' (Number)
    grades: [3.2, 4, 4, 5] // Propiedad 'grades' (Array de Numbers)
};

// Función para calcular el promedio (reutilizada del concepto anterior).
// Recibe un array de números y devuelve su media.
function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    // Iteramos sobre todos los números del array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i]; // Sumamos cada nota a 'sum'
    }
    // Dividimos la suma total por la cantidad de notas
    let avg = sum / arrayOfNumbers.length;
    return avg; // Devolvemos el resultado
}

// --- USO DEL OBJETO ---
// Accedemos a las propiedades del objeto usando la notación de punto (objeto.propiedad).

// student.name -> "Joe"
// student.studentId -> 1234
// student.grades -> [3.2, 4, 4, 5]

// Pasamos el array de notas (student.grades) a nuestra función calculateAverage.
console.log(student.name + " with id " + student.studentId + " has an GPA of " + calculateAverage(student.grades));