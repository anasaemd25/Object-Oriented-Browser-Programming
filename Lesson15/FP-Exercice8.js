/*
8. Exercise
Expand Exercise 7 by writing a function, which will accept one parameter area and the function returns
the names of the countries that have an area less or equal to the area parameter of the function. 
*/

const withLog = (fn) => (...args) => {
	console.log("Calling", fn.name || fn); // fn might not have a name if it's an anonymous function, so we log the function itself as a fallback.
	return fn(...args);
};

const url = "https://restcountries.com/v3.1/region/europe";
fetch(url)
    .then(response => response.json())
    .then(arrayOfCountries => {
        const sortedArrayOfCountries = [...arrayOfCountries].sort((a, b) => a.area - b.area);

        // Devuelve objetos con nombre y área
        const filterArea = (countries, specifiedArea) => {
            return countries
                .filter(country => country.area <= specifiedArea)
                .map(country => ({ name: country.name.common, area: country.area }));
        };

        const smallCountries = withLog(filterArea)(sortedArrayOfCountries, 1500);
        
        smallCountries.forEach(country => {
            console.log(country.name + " " + country.area + " km2");
        });

        // or using the more concise version:
        // const filterCountriesWithLogging = withLog(filterArea)
        // filterCountriesWithLogging(sortedArrayOfCountries, 1500).forEach(country => {
        //     console.log(country.name + " " + country.area + " km2");
        // });

    })
    .catch(error => console.error(error));