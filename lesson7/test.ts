let a = 5; // Javascript, non typeScript

let b: number = 10; // TypeScript sintax


function calSum(param1: number, param2: number){

    let result: number = param1 + param2;
    
    console.log(result);
}

calSum(a,b);