// Define arrays containing sequences of numbers
let numbers = [5, 11, 3, 1, 7];
let someOtherNumbers = [44, 22, 1, 56, 223, 5, 3, 33]

// PART A: Manual calculation using a loop
let sum = 0;
// Iterate through the 'numbers' array
// i starts at 0, goes up to (length - 1), incrementing by 1 each step
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]); // Print the current number
    sum += numbers[i];      // Add the current number to the running total (accumulator)
}

// Calculate and print the average
let avg = sum / numbers.length;
console.log('AVG of numbers is: ' + avg)

// PART B: Encapsulating the logic in a reusable function
// This function takes an array of numbers as input and returns the average
function calculateAverage(arrayOfNumbers) {
    let sum = 0;
    // Iterate through the passed array
    for (let i = 0; i < arrayOfNumbers.length; i++) {
        console.log(arrayOfNumbers[i]); // Print current element
        sum += arrayOfNumbers[i];       // Accumulate sum
    }
    // Calculate average
    let avg = sum / arrayOfNumbers.length;
    return avg; // Return the result to the caller
}

// Call the function with a different array and print the result
console.log('AVG of someOtherNumbers is: ' + calculateAverage(someOtherNumbers));
