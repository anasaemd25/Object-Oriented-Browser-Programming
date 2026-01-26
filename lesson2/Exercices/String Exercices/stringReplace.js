// ==========================================
// REEMPLAZAR TEXTO: .REPLACE()
// ==========================================

let str = "I love JavaScript";

// El método .replace(busqueda, reemplazo) busca la primera ocurrencia de "busqueda" 
// y la sustituye por "reemplazo".
// NOTA: No modifica el string original (str), sino que devuelve uno nuevo.

let result = str.replace("JavaScript", "coding");

console.log(result); // Imprime: "I love coding"
// console.log(str); // Seguiría imprimiendo "I love JavaScript"
