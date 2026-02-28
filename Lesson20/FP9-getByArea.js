document.getElementById("searchButton").onclick = function () {
    const countryUL = document.getElementById("countryList");
    countryUL.innerHTML = "";
    // Get countries
    const url = "https://restcountries.com/v3.1/region/europe";
    fetch(url)
        .then(response => response.json())
        .then(arrayOfCountries => {
            const minArea = parseInt(document.getElementById("areaInput").value);
            const filteredCountries = [...arrayOfCountries].filter(country => country.area >= minArea).sort((a, b) => a.area - b.area);

            filteredCountries.forEach(country => {
                // Create li element
                const countryList = document.createElement("li");
                countryList.innerHTML = country.name.common;
                countryUL.appendChild(countryList);
            })
        })
}

