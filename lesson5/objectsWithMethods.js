let example = {
    a: 10,
    b: 20,
    someMethod: function(){
        console.log("Some Mehtod Here!");
    }
}

example.someMethod();
console.log(example.a);

let someVariable = function(){
    console.log("Some Variable Here!!");
}

let someOtherVarName = 10;

function namedFunction(){
    console.log("Named Function!!!");
}

namedFunction();
someVariable(); // We call this function just like any other, even if it's assigned to a variable

// function passed as a parameter to another function
function functionExecutor(paramFunction){
    paramFunction();
}

console.log("Function Executor:");
functionExecutor(namedFunction);