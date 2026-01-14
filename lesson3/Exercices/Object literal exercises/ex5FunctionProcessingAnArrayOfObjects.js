// Reusing calculateAverage and printStudentGPAInfo from Ex4

function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    return sum / arrayOfNumbers.length;
}

function printStudentGPAInfo(studentObject) {
    let gpa = calculateAverage(studentObject.grades);
    gpa = gpa.toFixed(2);
    console.log(studentObject.name + " (ID: " + studentObject.studentId + ")" + " has a GPA of " + gpa)
}

// New for Ex5: array of students
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

// New function for Ex5
function printStudentsGPAInfo(arrayOfStudents) {
    for (let i = 0; i < arrayOfStudents.length; i++) {
        printStudentGPAInfo(arrayOfStudents[i]);
    }
}

// Call the function
printStudentsGPAInfo(students);
