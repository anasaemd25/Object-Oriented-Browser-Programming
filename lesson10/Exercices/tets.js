/*** START YOUR CODE HERE */

function crearHucha(dineroInicial) {
    let fDinero = dineroInicial; // Esta es tu mochila
    
    return function(aporte) {
        // AQUÍ: En lugar de definir 'hucha', simplemente haz la suma:
        // 1. Actualiza fDinero usando el aporte
        fDinero = fDinero + aporte;
        // 2. Devuelve fDinero actualizado
        return fDinero;
    };
}

/*** END YOUR CODE HERE */

const miHucha = crearHucha(10);
console.log(miHucha(5));  // Debería mostrar 15
console.log(miHucha(10)); // Debería mostrar 25
console.log(miHucha(2));  // Debería mostrar 27