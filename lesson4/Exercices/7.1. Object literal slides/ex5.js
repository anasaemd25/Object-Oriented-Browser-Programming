// Array of country objects
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

function countryCode(countriesArray) {
    // .map() creates a new array populated with the results of calling a provided function on every element in the calling array.
    // Here, it extracts the 'iso3166' property from each country object.
    console.log(countriesArray.map(country => country.iso3166));
}

countryCode(countries);