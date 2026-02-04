/*
3. Exercise
The splice() method of an array modifies the array in-place, which means that it is not a pure
function. 
*/

const values = [5, 11, 394, 2, 576];
console.log("VALUES 1 B4 SPLICE:", values);
values.splice(2, 1);
console.log("VALUES 1 AFTER SPLICE:", values);

/*
Create function called pureSplice() which accepts an array (all elements are numbers) and returns
a new array with elements removed in similar fashion as regular splice(startingIndex,
deleteCount). The original array must not be modified.
*/
const values2 = [5, 11, 394, 2, 576];

function pureSplice(array, start, deleteCount){
    return array.toSpliced(start, deleteCount)
}

console.table(values2);
const newArray = pureSplice(values2, 2, 1);
console.log("Result after pureSplice:", newArray);
console.log("VALUES2 outside the function (unchanged):", values2);