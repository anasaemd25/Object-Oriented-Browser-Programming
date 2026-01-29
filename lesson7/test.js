var a = 5; // Javascript variable declaration using 'var', dynamically typed
var b = 10; // Javascript variable

// Standard JavaScript function
function calSum(param1, param2) {
    // Variables have no type enforcement
    var result = param1 + param2;
    console.log(result);
}

// Arguments are passed normally
calSum(a, b);
