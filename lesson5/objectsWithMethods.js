// ==========================================
// FUNCIONES Y MÉTODOS: CONCEPTOS CLAVE
// ==========================================

let example = {
    a: 10,
    b: 20,
    // Un método es simplemente una función que es propiedad de un objeto.
    someMethod: function () {
        console.log("Some Mehtod Here!");
    }
}

// Invocación del método.
example.someMethod();
console.log(example.a);

// --- EXPRESIÓN DE FUNCIÓN (FUNCTION EXPRESSION) ---
// Asignamos una función anónima a una variable.
let someVariable = function () {
    console.log("Some Variable Here!!");
}

let someOtherVarName = 10;

// --- DECLARACIÓN DE FUNCIÓN (NAMED FUNCTION) ---
// La forma clásica de definir funciones.
function namedFunction() {
    console.log("Named Function!!!");
}

namedFunction();
someVariable(); // Se llama igual que una función normal.

// --- FUNCIONES COMO ARGUMENTOS (CALLBACKS) ---
// En JavaScript, las funciones son "ciudadanos de primera clase".
// Esto significa que pueden pasarse como argumentos a otras funciones.

function functionExecutor(paramFunction) {
    // 'paramFunction' recibe la REFERENCIA a la función, no su resultado.
    // Aquí ejecutamos esa función recibida añadiendo ().
    paramFunction();
}

console.log("Function Executor:");
// Pasamos 'namedFunction' (sin paréntesis) para que functionExecutor la ejecute por nosotros.
functionExecutor(namedFunction);