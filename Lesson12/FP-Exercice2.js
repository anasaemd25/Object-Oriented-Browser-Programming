/*
2. Exercise
Here is a function which finds the minimum value from array values. 
*/

const values = [533,235,223,56,88,2,6,88,664];

// Impure version: This function relies on the global 'values' array, making it impure because its output depends on external state.
// It has side effects in the sense that changing the global array would affect the function's behavior without changing the function itself.
function minValue() {
    let min = null;
    for(let i = 0; i < values.length; i++) {
        if((min == null) || (values[i] < min)) {
        min = values[i];
        }
    }
    return min;
}

const minimum = minValue();
console.log(minimum); // 2

// Write a pure version of a function which finds minimum value in an array.

const values2 = [533,235,223,56,88,2,6,88,664];

// Pure version: This function takes the array as a parameter, making it pure. 
// It has no side effects and its output depends only on the input parameters.
// Pure functions are predictable, testable, and easier to reason about.
function minValuePure(values) {
    let min = null;
    for(let i = 0; i < values.length; i++) {
        if((min == null) || (values[i] < min)) {
        min = values[i];
        }
    }
    return min;
}

const minimum2 = minValuePure(values2);
console.log(minimum2); // 2

