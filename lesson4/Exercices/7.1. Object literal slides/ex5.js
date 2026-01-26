// ==========================================
// USO DE .MAP()
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
    // ... otros países (simulados aquí para brevedad)
    {
        country: "Germany",
        iso3166: "DE"
    },
    {
        country: "France",
        iso3166: "FR"
    },
    {
        country: "Sweden",
        iso3166: "SE"
    }
];

function countryCode(countriesArray) {
    // .map() crea un NUEVO array transformando cada elemento del array original.
    // Es perfecto para extraer datos específicos o reformatearlos.

    // country => country.iso3166
    // Para cada objeto 'country', devuelve SOLO su propiedad 'iso3166'.

    // Entrada: [{...iso:"BE"}, {...iso:"DE"}, ...]
    // Salida:  ["BE", "DE", "FR", "SE"]

    console.log(countriesArray.map(country => country.iso3166));
}

countryCode(countries);