/*
3. Exercise
The splice() method of an array modifies the array in-place, which means that it is not a pure
function. 
*/

const values = [5, 11, 394, 2, 576];

console.log("VALUES 1 B4 SPLICE:", values); // prints 5, 11, 394, 2, 576
// SPLICE (Impure / Mutating):
// This method changes the contents of `values` directly. 
// It returns the removed elements, but the original array is forever changed.
values.splice(2, 1); // Removes 1 element at index 2 (the number 394)
console.log("VALUES 1 AFTER SPLICE:", values); // prints 5, 11, 2, 576 (394 is removed)

/*
Create function called pureSplice() which accepts an array (all elements are numbers) and returns
a new array with elements removed in similar fashion as regular splice(startingIndex,
deleteCount). The original array must not be modified.
*/
const values2 = [5, 11, 394, 2, 576];

// Modern Pure Approach using toSpliced():
// `toSpliced()` is a newer array method (ES2023).
// It works exactly like `splice()`, but it returns a NEW array and leaves the original one unchanged.
// This creates an IMMUTABLE operation.
function pureSplice(array, start, deleteCount) {
    return array.toSpliced(start, deleteCount)
}

/*
// Older Pure Approach (Manual Copy):
// If toSpliced() is not supported (older browsers/Node), we manually copy the array first.
function pureSplice(array, start, deleteCount){
    // Spread operator [...] creates a shallow copy of the array elements.
    // Changing 'newArray' will not affect 'array' (unless elements are objects, but the array structure is safe).
    let newArray = [...array]; 
    newArray.splice(start, deleteCount); // Mutate the copy
    return newArray;
}
*/

console.table(values2); // prints 5, 11, 394, 2, 576 (original array is unchanged)

const newArray = pureSplice(values2, 2, 1); // newArray is a new array with the element at index 2 removed (394), but values2 remains unchanged.

console.log("Result after pureSplice:", newArray); // prints 5, 11, 2, 576 (394 is removed in the new array)
console.log("VALUES2 outside the function (unchanged):", values2); // prints 5, 11, 394, 2, 576 (original array is still intact)

/*
Create function called pureSplice() which accepts an array (all elements are numbers) and returns
a new array with elements removed in similar fashion as regular splice(startingIndex,
deleteCount).
*/

const values4 = [5, 11, 394, 2, 576];
values4.splice(2, 1);
console.table(values4); // prints 5, 11, 2, 576 (394 is removed)

const values5 = [5, 11, 394, 2, 576];
// IMMUTABILITY PATTERN:
// This function ensures purity by:
// 1. Copying the input array (`.slice()`).
// 2. Modifying the copy.
// 3. Returning the copy.
// The original `array` remains untouched.
function pureSplice(array, start, deleteCount) {
    let newArray = array.slice(); // Shallow copy
    // let newArray = [...array] Alternative using spread operator
    newArray.splice(start, deleteCount);
    return newArray;
}

console.table(values5); // prints 5, 11, 394, 2, 576 (original array is unchanged)
let newArray2 = pureSplice(values5, 2, 1); // newArray2 is a new array with the element at index 2 removed (394), but values5 remains unchanged.
console.log("Result after pureSplice:", newArray2); // prints 5, 11, 2, 576 (394 is removed in the new array)
console.log("VALUES5 outside the function (unchanged):", values5); // prints 5, 11, 394, 2, 576 (original array is still intact)