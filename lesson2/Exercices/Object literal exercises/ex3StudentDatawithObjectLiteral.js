/*
Ex3 Student Data with Object Literal (Introduction to Objects)
Create a student object literal to represent a student with the following properties:
· name - student's name (e.g., "Joe")
· studentId - student ID (e.g., "12345")
· grades - an array of five grade numbers (1-5)
Tasks:
1. Create the student object with sample data
2. Use the calculateAverage function from Ex2 to calculate the student's GPA
3. Display the student's name and GPA to the console
Example output: "Joe (ID: 12345) has a GPA of 3.6"
*/
// Creating an Object Literal to represent a student
// Objects store data in key-value pairs (properties)
let student = {
    name: "Joe",           // String property
    studentId: 1234,       // Number property
    grades: [3.2, 4, 4, 5] // Array property containing number values
};

// Reusing the average calculation function
// Takes an array of numbers and returns their average
function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        sum += arrayOfNumbers[i];
    }
    let avg = sum / arrayOfNumbers.length;
    return avg;
}

// Accessing object properties using dot notation (e.g., student.name)
// passing the 'grades' array from the student object to the function
console.log(student.name + " with id " + student.studentId + " has an GPA of " + calculateAverage(student.grades));