// Array of country objects
let countries = [
    {
        country: "Belgium",
        capital: "Brussels",
        language: ["Dutch", "French", "German"],
        area: "3078km²",
        population: 1090863,
        GDP: 50135,
        iso3166: "BE"
    },
    {
        country: "Germany",
        capital: "Berlin",
        language: ["German"],
        area: "357022km²",
        population: 83166711,
        GDP: 46000,
        iso3166: "DE"
    },
    {
        country: "France",
        capital: "Paris",
        language: ["French"],
        area: "551695km²",
        population: 67413000,
        GDP: 41400,
        iso3166: "FR"
    },
    {
        country: "Sweden",
        capital: "Stockholm",
        language: ["Swedish"],
        area: "450295km²",
        population: 10379295,
        GDP: 55400,
        iso3166: "SE"
    }
];


function GDP(list) {
    // [...list] creates a SHALLOW COPY of the array using the spread operator.
    // This is important because .sort() mutates the original array. We want to sort the copy, not the original source data.

    [...list]
        // .sort(compareFunction) sorts elements.
        // if b.GDP - a.GDP is positive, b comes before a (Descending order).
        .sort((a, b) => b.GDP - a.GDP)
        // .forEach() executes a provided function once for each array element.
        .forEach(c => console.log(c.GDP, " - ", c.country))
}
GDP(countries)
