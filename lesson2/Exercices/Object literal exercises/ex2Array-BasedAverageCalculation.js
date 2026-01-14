let numbers = [5, 11, 3, 1, 7];
let someOtherNumbers = [44,22,1,56,223,5,3,33]

// PART A
let sum = 0;
for(let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    sum += numbers[i];
}

let avg = sum / numbers.length;
console.log('AVG of numbers is: ' + avg)

// PART B
function calculateAverage(arrayOfNumbers)
{
    let sum = 0;
    for(let i = 0; i < arrayOfNumbers.length; i++) {
        console.log(arrayOfNumbers[i]);
        sum += arrayOfNumbers[i];
    }
    let avg = sum / arrayOfNumbers.length;
    return avg;
}

console.log('AVG of someOtherNumbers is: ' + calculateAverage(someOtherNumbers));
