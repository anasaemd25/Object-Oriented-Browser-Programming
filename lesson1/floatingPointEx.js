// ==========================================
// PRECISIÓN DE PUNTO FLOTANTE (FLOATING POINT)
// ==========================================

// JavaScript utiliza el estándar IEEE 754 para representar números.
// Esto significa que los números decimales se almacenan en binario, lo que puede causar pequeñas imprecisiones
// porque algunos números decimales (como 0.3 o 0.4) tienen representaciones binarias infinitas periódicas.

// Esperamos: 0.1
// Realidad: 0.10000000000000003 (aproximadamente) debido a errores de redondeo en binario.
let x = 0.4 - 0.3;

// Esperamos: 0.1
// En este caso particular, la operación también puede no ser exacta, pero podría coincidir o no con el error de arriba.
let y = 0.5 - 0.4;

console.log(x);
console.log(y);

// --- COMPARACIÓN DE NÚMEROS FLOTANTES ---
// Debido a estos errores de precisión, NUNCA se deben comparar números flotantes directamente con '===' o '=='.

console.log(x === y); // Imprime: false (Sorprendentemente, 0.1 no es igual a 0.1 en este contexto)

// EXPLICACIÓN:
// x podría ser 0.10000000000000003
// y podría ser 0.09999999999999998
// Son números diferentes para el ordenador.

// SOLUCIÓN CORRECTA:
// Para comparar decimales, verifica si la diferencia absoluta es menor que un número muy pequeño (Epsilon).
// Ejemplo: Math.abs(x - y) < Number.EPSILON