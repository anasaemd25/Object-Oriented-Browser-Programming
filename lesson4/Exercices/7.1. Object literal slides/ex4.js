// ==========================================
// USO DE .REDUCE()
// ==========================================

let countries = [
    { country: "Belgium", population: 1090863 },
    { country: "Germany", population: 83166711 },
    { country: "France", population: 67413000 },
    { country: "Sweden", population: 10379295 }
    // (Se han omitido propiedades irrelevantes para este ejemplo para mayor claridad)
];

function totalPop(popInfo) {
    // .reduce() se usa para "reducir" un array a un único valor (aquí, la suma total).
    // Sintaxis: array.reduce((acumulador, elementoActual) => nuevaSuma, valorInicial)

    let sum = popInfo.reduce((acc, curr) => {
        // acc (acumulador): Guarda la suma acumulada hasta el momento.
        // curr (actual): Es el objeto del país actual en la iteración.
        // 0: Es el valor inicial de 'acc'.

        return acc + curr.population; // Sumamos la población actual al acumulado
    }, 0);

    console.log(sum);
}

totalPop(countries);

// --- VERSIÓN ALTERNATIVA CLÁSICA (COMENTADA) ---
/*
let total = 0;
for (const country of countries) {
    total += country.population; // Suma imperativa manual
}
console.log(total);
*/