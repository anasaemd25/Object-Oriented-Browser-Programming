/*
Ex4 Functions processing objects
Expand your Ex3 solution by writing a new function, which is named printStudentGPAInfo 
and it accepts a student object, prints “XXX (ID: YYYY) has GPA of ZZZ” where:
· XXX is student name
· YYY is student ID
· ZZZ is student GPA
*/

// Sample student object
let student = {
    name: "Joe",
    studentId: 1234,
    grades: [3.39, 4.2, 4, 5]
};

// Helper function to calculate average of numbers in an array
function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    // Standard for loop to sum up values
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    // Alt wih reduce method:
    // let sum = arrayOfNumbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
    // Divide sum by count to get average
    let avg = sum / arrayOfNumbers.length;
    return avg;
}

// Function to print formatted student info
// Expects a student object with 'name', 'studentId', and 'grades' properties
function printStudentGPAInfo(studentObject) {
    // Calculate GPA using the helper function on the student's grades
    let gpa = calculateAverage(studentObject.grades);

    // Print the formatted string. .toFixed(2) formats the number to 2 decimal places.
    console.log(student.name + " (ID: " + student.studentId + ")" + " has a GPA of " + gpa.toFixed(2))
}

// Call the new function with the student object
printStudentGPAInfo(student);
