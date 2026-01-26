// ==========================================
// PROCESAMIENTO DE ARRAYS DE OBJETOS
// ==========================================

// Reutilizamos calculateAverage y printStudentGPAInfo del Ejercicio 4.

// Calcula la media aritmética de un array de números.
function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    return sum / arrayOfNumbers.length;
}

// Imprime la información de UN solo estudiante.
function printStudentGPAInfo(studentObject) {
    let gpa = calculateAverage(studentObject.grades);
    gpa = gpa.toFixed(2); // Redondear a 2 decimales.
    console.log(studentObject.name + " (ID: " + studentObject.studentId + ")" + " has a GPA of " + gpa)
}

// --- NUEVO PARA EX5 ---
// Un array que contiene múltiples objetos estudiante.
let students = [
    {
        name: "Joe",
        studentId: 1234,
        grades: [3.2, 4.0, 3.0, 5.0]
    },
    {
        name: "Anna",
        studentId: 5678,
        grades: [4.5, 4.0, 4.5, 4.2]
    },
    {
        name: "Mike",
        studentId: 9012,
        grades: [2.8, 3.5, 3.0, 3.7]
    }
];

// Nueva función para procesar la lista completa.
// Recibe un ARRAY de estudiantes.
function printStudentsGPAInfo(arrayOfStudents) {

    // Recorremos el array de estudiantes con un bucle for clásico.
    for (let i = 0; i < arrayOfStudents.length; i++) {

        // En cada iteración:
        // 1. arrayOfStudents[i] obtiene el objeto estudiante actual.
        // 2. Llamamos a printStudentGPAInfo() pasándole ese estudiante individual.
        // Esto es un ejemplo de COMPOSICIÓN DE FUNCIONES: usar funciones pequeñas para construir lógica más compleja.
        printStudentGPAInfo(arrayOfStudents[i]);
    }
}

// Llamamos a la función principal con nuestra lista de datos.
printStudentsGPAInfo(students);
