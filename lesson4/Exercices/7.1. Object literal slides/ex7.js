/*
Objetivo del Ejercicio 7:
Trabajar con estructura de datos anidadas complejas.
Cada país ahora tiene una propiedad 'largestCity' que es un ARRAY DE OBJETOS.
Debemos calcular estadísticas agregadas (población total de ciudades, porcentaje sobre el país, etc.).
*/

let countries = [
    {
        country: "Belgium",
        population: 1090863, // Población total del país
        largestCity: [       // Array anidado
            { name: "Brussels", population: 1019022 },
            { name: "Antwerp", population: 529247 },
            { name: "Ghent", population: 265086 },
            { name: "Charleroi", population: 200132 },
            { name: "Liège", population: 195278 }
        ]
        // ... otras propiedades
    },
    // ... Germany, France, Sweden (datos similares)
    {
        country: "Germany",
        population: 83166711,
        largestCity: [
            { name: "Berlin", population: 3520000 },
            { name: "Hamburg", population: 1790000 },
            // ...
            { name: "Frankfurt", population: 733000 }
        ]
    }
    // ... Se asumen el resto de datos como en el original
];

function printCountryInfo(countriesArray) {

    // Bucle externo: Recorre cada PAÍS
    for (let country of countriesArray) {
        console.log("Country:", country.country);
        console.log("Population:", country.population);
        console.log("5 Biggest cities:");

        let citiesSum = 0; // Acumulador para la población de las ciudades ESTE país

        // Bucle interno (Nested Loop): Recorre cada CIUDAD dentro de 'country.largestCity'
        for (let city of country.largestCity) {
            console.log(city.name + ":", city.population);
            citiesSum += city.population; // Sumamos la población de la ciudad actual
        }

        console.log("Total population of the cities:", citiesSum);

        // Cálculo de porcentaje: (Parte / Total) * 100
        let percentageCities = (citiesSum / country.population) * 100;

        // .toFixed(1) para mostrar solo un decimal (ej: 45.2%)
        console.log("Percentage of the population in these cities:", percentageCities.toFixed(1) + "%");

        // Separador visual entre países
        console.log("--------------------------");

    }
}

printCountryInfo(countries);

// NOTA: Abajo había una versión alternativa comentada que hace esencialmente lo mismo.