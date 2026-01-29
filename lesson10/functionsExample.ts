// named function
function sum(a, b, c) {
    return a + b + c;
}

const someVariable = function (x, y) {
    return x * y;
}

const greetings = function() {
    console.log("Hello from greetings function");
}

function executeAnotherFunction(functionAsParam) {
    functionAsParam();
}

executeAnotherFunction(greetings);

const fooBar = greetings;
fooBar();


// function scope
let a = 5;
function example(param1) {
    let b = 10;
    console.log(a+b+param1)    
}

example(15); 
console.log(b); // this is not possible, because b is function scoped



