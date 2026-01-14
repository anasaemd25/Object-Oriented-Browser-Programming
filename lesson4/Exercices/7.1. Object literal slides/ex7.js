/*
Modify the country info so that each country object has a new property called largestCity
and the value of the porperty is an array of objects. The objects in the array shold be
formated as follows:
{
    name: "Antwerp",
    population: 214124,
}

The five biggest cities of each country should be recorded. 
Next create a function which accepts the array of countries as a parameter. 
The function should print out for each country.
    the name of the country,
    the total population of the country,
    the names of the five biggest cities in the country and their population,
    the total sum of population in the five biggest cities,
    the percentage of the population in those cities out of the total population in the country
*/

let countries = [
    {
        country: "Belgium",
        capital: "Brussels",
        language: ["Dutch", "French", "German"],
        area: "3078km²",
        population: 1090863,
        GDP: 50135,
        iso3166: "BE",
        largestCity: [
            {name: "Brussels", population: 1019022 },
            {name: "Antwerp", population: 529247 },
            {name: "Ghent", population: 265086 },
            {name: "Charleroi", population: 200132 },
            {name: "Liège", population: 195278 }
        ]
    },
    {
        country: "Germany",
        capital: "Berlin",
        language: ["German"],
        area: "357022km²",
        population: 83166711,
        GDP: 46000,
        iso3166: "DE",
        largestCity: [
            {name: "Berlin", population: 3520000 },
            {name: "Hamburg", population: 1790000 },
            {name: "Munich", population: 1450000 },
            {name: "Cologne", population: 1060000 },
            {name: "Frankfurt", population: 733000 }
        ]
    },
    {
        country: "France",
        capital: "Paris",
        language: ["French"],
        area: "551695km²",
        population: 67413000,
        GDP: 41400,
        iso3166: "FR",
        largestCity: [
            {name: "Paris", population: 2110000 },
            {name: "Marseille", population: 870000 },
            {name: "Lyon", population: 522000 },
            {name: "Toulouse", population: 498000 },
            {name: "Nice", population: 344000 }
        ]
    },
    {
        country: "Sweden",
        capital: "Stockholm",
        language: ["Swedish"],
        area: "450295km²",
        population: 10379295,
        GDP: 55400,
        iso3166: "SE",
        largestCity: [
            {name: "Stockholm", population: 1515017 },
            {name: "Gothenburg", population: 572799 },
            {name: "Malmö", population: 301706 },
            {name: "Uppsala", population: 149245 },
            {name: "Västerås", population: 117746 }
        ]
    }
];

function printCountryInfo(countriesArray){
    for(let country of countriesArray){
        console.log("Country:", country.country);
        console.log("Population:", country.population);
        console.log("5 Biggest cities:");
        let citiesSum = 0;
        for(let city of country.largestCity){
            console.log(city.name + ":", city.population);
            citiesSum += city.population;
        }
        console.log("Total population of the cities:", citiesSum);
        let percentageCities = (citiesSum / country.population) * 100;
        console.log("Percentage of the population in these cities:", percentageCities.toFixed(1) + "%");
        console.log("--------------------------");
        
    }
}

printCountryInfo(countries);


/*
function printCountriesInfo(arrayOfCountries){
    for(let country of arrayOfCountries){
        console.log("Country name:", country.country);
        console.log("Total population:", country.population);
        console.log("5 biggest cities and their population:");
        let sumCities = 0;
        for(let city of country.largestCity){
            console.log(city.name + ":", city.population)
            sumCities += city.population
        }
        console.log("Sum of population in the five biggest cities:", sumCities);
        let percentageCity = sumCities/country.population * 100;
        console.log("% of the population out of the total population:", percentageCity);
        console.log("--------------------------");
    }
}
printCountriesInfo(countries);
*/