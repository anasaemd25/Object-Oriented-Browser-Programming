/*
2. Exercise
Here is a function which finds the minimum value from array values. 
*/

const values = [533, 235, 223, 56, 88, 2, 6, 88, 664];

// Impure version:
// BAD: It accesses 'values' from the global scope.
// If 'values' changes (mutated by someone else), this function's result changes. 
// This makes it unpredictable and hard to test.
function minValue() {
    let min = null;
    // Iterate through the array to find the smallest number
    for (let i = 0; i < values.length; i++) {
        // Initialize 'min' with the first element or update it if a smaller value is found
        if ((min == null) || (values[i] < min)) {
            min = values[i];
        }
    }
    return min;
}

const minimum = minValue();
console.log(minimum); // 2

// Write a pure version of a function which finds minimum value in an array.

const values2 = [533, 235, 223, 56, 88, 2, 6, 88, 664];

// Pure version:
// GOOD: It requests the data it needs via arguments ('values').
// It does not touch the outside world.
// It creates local variables only.
function minValuePure(values) {
    let min = null;
    // Loop through the input array
    for (let i = 0; i < values.length; i++) {
        // If 'min' is currently null (start of search) OR current element is less than 'min'
        if ((min == null) || (values[i] < min)) {
            min = values[i];
        }
    }
    return min;
}

const minimum2 = minValuePure(values2);
console.log(minimum2); // 2

