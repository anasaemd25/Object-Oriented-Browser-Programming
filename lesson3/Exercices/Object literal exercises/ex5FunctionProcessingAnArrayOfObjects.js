// Reusing calculateAverage and printStudentGPAInfo from Ex4

// Function to calculate the average of an array of numbers
function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    return sum / arrayOfNumbers.length;
}

// Function to print information for a single student object
function printStudentGPAInfo(studentObject) {
    let gpa = calculateAverage(studentObject.grades); // Calculate GPA
    gpa = gpa.toFixed(2); // Format to 2 decimal places
    console.log(studentObject.name + " (ID: " + studentObject.studentId + ")" + " has a GPA of " + gpa)
}

// New for Ex5: array of student objects
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

// New function for Ex5 to process an array of students
function printStudentsGPAInfo(arrayOfStudents) {
    // Iterate through the array of student objects
    for (let i = 0; i < arrayOfStudents.length; i++) {
        // Reuse the function to print info for the current student
        printStudentGPAInfo(arrayOfStudents[i]);
    }
}

// Call the main function with the list of students
printStudentsGPAInfo(students);
