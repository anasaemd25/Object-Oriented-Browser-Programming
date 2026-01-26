// ==========================================
// OBJETOS LITERALES CON MÉTODOS
// ==========================================

// Aquí definimos objetos uno por uno (sin usar una función constructora "molde").
// Es útil para objetos únicos, pero ineficiente si necesitamos crear muchos coches.

let car = {
    make: "Toyota",
    registration: "ABC000",
    speed: 0,
    // Método definido directamente en el literal.
    accelerate: function () {
        // 'this' se refiere a ESTE objeto (car).
        this.speed += 5;
    }
}

let car2 = {
    make: "Audi",
    registration: "GHJ001",
    speed: 0,
    accelerate: function () {
        this.speed += 5;
    }
}

// Manipulación directa de propiedades.
console.log(car.speed);
car.speed = 10; // Podemos cambiar propiedades directamente.
console.log(car.speed);

// Uso de métodos.
car.accelerate(); // speed pasa de 10 a 15
car.accelerate(); // speed pasa de 15 a 20
console.log(car.speed);

console.log(car2.speed); // car2 es independiente, su velocidad sigue siendo 0.
