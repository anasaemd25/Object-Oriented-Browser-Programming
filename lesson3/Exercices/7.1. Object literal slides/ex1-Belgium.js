// ==========================================
// OBJETOS LITERALES: DEFINICIÓN BÁSICA
// ==========================================

// Creación de un objeto llamado 'belgium' usando la sintaxis de llaves { }.
// Representa una entidad compleja (un país) con múltiples propiedades.

let belgium = {
    country: "Belgium",         // String: Nombre del país
    capital: "Brussels",        // String: Capital
    language: ["Dutch", "French", "German"], // Array: Idiomas hablados (puede contener múltiples valores)
    area: "3078km",             // String: Área
    population: 1090863,        // Number: Población
    GPD: "$50135",              // String: Producto Interno Bruto
    iso3166: "BE"               // String: Código ISO
}

// Imprimir el objeto completo en la consola.
// Muestra la estructura {clave: valor} completa.
console.log(belgium);