// ==========================================
// USO AVANZADO DE ARRAYS: MAP Y SPREAD
// ==========================================

let countries = [
    {
        country: "Belgium",
        capital: "Brussels",
        language: ["Dutch", "French", "German"],
        area: "3078km²",
        population: 1090863,
        GDP: "$50135",
        iso3166: "BE"
    },
    {
        country: "Germany",
        capital: "Berlin",
        language: ["German"],
        area: "357022km²",
        population: 83166711,
        GDP: "$46000",
        iso3166: "DE"
    },
    // ... otros países
    {
        country: "France",
        capital: "Paris",
        language: ["French"],
        area: "551695km²",
        population: 67413000,
        GDP: "$41400",
        iso3166: "FR"
    },
    {
        country: "Sweden",
        capital: "Stockholm",
        language: ["Swedish"],
        area: "450295km²",
        population: 10379295,
        GDP: "$55400",
        iso3166: "SE"
    }
];

// Función para obtener la población máxima.
function getMaxPop(arrayOfCountries) {

    // Aquí ocurren dos operaciones avanzadas en una sola línea:

    // 1. arrayOfCountries.map(i => i.population)
    //    .map() transforma un array en otro. 
    //    Toma cada objeto 'i' y devuelve solo su propiedad 'i.population'.
    //    Resultado intermedio: [1090863, 83166711, 67413000, 10379295]

    // 2. Math.max(...[array])
    //    Math.max() espera argumentos separados por comas (e.g., Math.max(1, 2, 3)).
    //    No acepta un array directamente.
    //    El operador Spread (...) "expande" el array en argumentos individuales.
    //    Equivale a: Math.max(1090863, 83166711, 67413000, 10379295)

    console.log(Math.max(...arrayOfCountries.map(i => i.population)))
}

getMaxPop(countries) // Imprime 83166711 (Población de Alemania)