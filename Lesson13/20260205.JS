// Filter with array methods:
// Filter even values from an array

array1 = [1,10,4,7];

let result1 = array1.filter((x) => x % 2 == 0);
console.log(result1);

// Double the values in an array

let result2 = array1.map((x) => x *2);
console.log(result2);

// Sum up all the values in an array
const initVal = 0;
let result3 = array1.reduce((a,b) => a + b, initVal);
console.log(result3);

function doSomething(x) {
    x++;
    console.log(x);
}
let y = 5;
doSomething(y);
console.log(y);

function addSomethingToArray(numbers) {
    let newArray = numbers.slice();
    newArray.push(9);
    return newArray;
}
let numberArray = [45, 77, 19];
console.table(numberArray);
let newArray = addSomethingToArray(numberArray);
console.table(numberArray);
console.table(newArray);


// Create a function that gets a function as an input parameter and then runs that function twice.


// Create a function that gets an integer (factor) as an input parameter and then returns a function that gets another integer (number) and returns the
// multiplication of factor and number.