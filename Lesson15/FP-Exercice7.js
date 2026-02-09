/*
7. Exercise
Use https://restcountries.com/v3.1/region/europe to get data about European countries and convert it
into a new array, which contains only microstates which have area less than 1000km2. Use filter method
of an array.
*/

const url = "https://restcountries.com/v3.1/region/europe";

fetch(url)
    .then(response => response.json())
    .then(arrayOfCountries => {
        const sortedArrayOfCountries = [...arrayOfCountries].sort((a, b) => a.area - b.area)
        
        // sortedArrayOfCountries.forEach(country => {
        //     console.log(country.name.common, country.area, "km2");
        // })
        
        const smallCountries = sortedArrayOfCountries.filter(country => country.area < 1000);
        
        smallCountries.forEach(country => {
            console.log(country.name.common, country.area, "km2");
        })
    })