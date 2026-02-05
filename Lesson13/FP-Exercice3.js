/*
3. Exercise
The splice() method of an array modifies the array in-place, which means that it is not a pure
function. 
*/

const values = [5, 11, 394, 2, 576];
console.log("VALUES 1 B4 SPLICE:", values);
// SPLICE (Impure / Mutating):
// This method changes the contents of `values` directly. 
// It returns the removed elements, but the original array is forever changed.
values.splice(2, 1);
console.log("VALUES 1 AFTER SPLICE:", values);

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

console.table(values2);
const newArray = pureSplice(values2, 2, 1);
console.log("Result after pureSplice:", newArray);
console.log("VALUES2 outside the function (unchanged):", values2);

/*
Create function called pureSplice() which accepts an array (all elements are numbers) and returns
a new array with elements removed in similar fashion as regular splice(startingIndex,
deleteCount).
*/
const values4 = [5, 11, 394, 2, 576];
values4.splice(2, 1);
console.table(values4);

const values5 = [5, 11, 394, 2, 576];
// IMMUTABILITY PATTERN:
// This function ensures purity by:
// 1. Copying the input array (`.slice()`).
// 2. Modifying the copy.
// 3. Returning the copy.
// The original `array` remains untouched.
function pureSplice(array, start, deleteCount) {
    let newArray = array.slice(); // Shallow copy
    newArray.splice(start, deleteCount);
    return newArray;
}
console.table(values5);
let newArray2 = pureSplice(values5, 2, 1);
console.table(values5);
console.table(newArray2);