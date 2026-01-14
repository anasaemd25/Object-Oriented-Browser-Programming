/*
Ex4 Functions processing objects
Expand your Ex3 solution by writing a new function, which is named printStudentGPAInfo 
and it accepts a student object, prints “XXX (ID: YYYY) has GPA of ZZZ” where:
· XXX is student name
· YYY is student ID
· ZZZ is student GPA
*/
let student = {
    name: "Joe",
    studentId: 1234,
    grades: [3.39, 4.2, 4, 5]
};

function calculateAverage(arrayOfNumbers){
    let sum = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++){
        sum += arrayOfNumbers[i];
    }
    let avg = sum/arrayOfNumbers.length;
    return avg;
}

function printStudentGPAInfo(studentObject){
    let gpa = calculateAverage(studentObject.grades);
    console.log(student.name + " (ID: " + student.studentId + ")" + " has a GPA of " + gpa.toFixed(2))
}

// Call the new function
printStudentGPAInfo(student);
