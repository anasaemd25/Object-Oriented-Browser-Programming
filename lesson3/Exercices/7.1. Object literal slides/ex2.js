// ==========================================
// ARRAY DE OBJETOS E ITERACIÓN (FOR...OF)
// ==========================================

// Definimos un Array 'countries' que contiene múltiples objetos.
// Cada elemento del array es un objeto {} independiente, separado por comas.
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

// Función para imprimir la población de cada país.
// Recibe como argumento 'countryInfo', que se espera sea un array de objetos.
function countryPopulation(countryInfo) {

    // Bucle FOR...OF: Una forma moderna y limpia de recorrer arrays.
    // "Para cada 'countryData' (elemento individual) dentro de 'countryInfo' (el array)..."
    // En cada iteración, 'countryData' toma el valor del objeto actual.

    for (let countryData of countryInfo) {
        // Accedemos a las propiedades del objeto actual usando el punto (.).
        console.log(countryData.country + " population " + countryData.population)
    }
}

// Llamamos a la función pasando nuestro array de países.
countryPopulation(countries);