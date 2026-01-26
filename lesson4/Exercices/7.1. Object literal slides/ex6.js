// ==========================================
// ORDENAR ARRAYS (.SORT) Y FOR-EACH
// ==========================================

let countries = [
    { country: "Belgium", GDP: 50135 },
    { country: "Germany", GDP: 46000 },
    { country: "France", GDP: 41400 },
    { country: "Sweden", GDP: 55400 }
];


function GDP(list) {
    // [...list]: 
    // Creamos una COPIA del array original usando spread syntax (...) dentro de corchetes.
    // Esto es muy importante porque .sort() MUTARÍA el array original si lo usáramos directamente.

    [...list]

        // .sort(funciónComparadora)
        // Ordena los elementos. La función recibe dos elementos (a, b).
        // Si devuelve < 0, 'a' va primero.
        // Si devuelve > 0, 'b' va primero.
        // b.GDP - a.GDP da un resultado positivo si b es mayor que a -> Orden DESCENDENTE (Mayor a Menor).
        .sort((a, b) => b.GDP - a.GDP)

        // .forEach()
        // Ejecuta una función por cada elemento del array (ya ordenado).
        .forEach(c => console.log(c.GDP, " - ", c.country))
}

GDP(countries);
// Salida esperada (Ordenado por GDP):
// 55400 - Sweden
// 50135 - Belgium
// 46000 - Germany
// 41400 - France
