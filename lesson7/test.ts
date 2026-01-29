let a = 5; // Type inference: TypeScript infers 'a' is a number
let b: number = 10; // Explicit Type Annotation: 'b' must be a number

// Function with type annotations for parameters
function calSum(param1: number, param2: number) {
    // Explicity typing the result variable
    let result: number = param1 + param2;

    console.log(result);
}

calSum(a, b); // Calling the function with correct types