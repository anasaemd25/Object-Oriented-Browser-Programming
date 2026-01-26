// ==========================================
// STRING TEMPLATES (PLANTILLAS LITERALES)
// ==========================================

let name = "Anas";

// Template Literals:
// Usan comillas invertidas (backticks) en lugar de comillas simples o dobles.
// Permiten insertar expresiones directamente dentro del string usando ${expresion}.
// Esto es mucho más limpio que usar concatenación con '+'.

let str = `My name is ${name}`; // Se sustituye ${name} por el valor de la variable 'name'.

console.log(str); // Imprime: My name is Anas
