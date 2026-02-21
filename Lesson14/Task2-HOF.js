/*
Create a function that gets a function as an input parameter and then runs that function twice.
 */
function runTwice(fn) {
    fn();
    fn();
}
// Function call
runTwice(() => console.log('Hello!'));
function printHello() {
    console.log('Hello!');
}

let x = printHello;
let y = printHello();
runTwice(printHello);

/*
Create a function that gets an integer (factor) as an input parameter and then returns a function that gets another integer (number) and returns the multiplication of factor and number.
*/

// HOF
const multiplication = ( factor ) => { // gets an integer (factor) as an input parameter
    // returns a function that gets another integer (number) 
    return function( number ) {
        // and returns the multiplication of factor and number.
        return factor * number;
    }
}


// a function to double a value
const double = multiplication(2);
const triple = multiplication(3);

// function call 
console.log(double(10));
console.log(triple(10));