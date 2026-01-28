const greetings = function() {
    console.log("Hello from greetings function");
}

function executeAnotherFunction(functionAsParam) {
    functionAsParam();
}

/* executeAnotherFunction(function(){
    console.log("Hello from greetings function");
}); */

const someFunction = () => console.log("Hello from greetings function");
const multiplyTwoParams = (a: number, b: number) => a * b;

const multiplyAndLog = (a: number, b: number) => {
    const results = a * b;
    return results;
}

