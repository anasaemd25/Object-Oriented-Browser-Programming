// Array of Object Literals representing countries
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

// Function to find and print the maximum population
function getMaxPop(arrayOfCountries) {
    // 1. arrayOfCountries.map(i => i.population) transforms the array of objects into an array of just population numbers.
    // 2. The spread operator (...) expands this array into individual arguments for Math.max().
    // 3. Math.max() returns the largest number.
    console.log(Math.max(...arrayOfCountries.map(i => i.population)))
}

getMaxPop(countries)