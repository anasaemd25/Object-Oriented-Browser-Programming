// ==========================================
// CONSTRUCTOR CON MÉTODOS QUE MODIFICAN EL ESTADO
// ==========================================

function Car(make) {
    this.make = make;
    this.registration = "ABC000"; // Valor por defecto para todos
    this.speed = 0;               // Velocidad inicial

    // Método para acelerar.
    // Modifica una propiedad interna (this.speed) del propio objeto.
    this.accelerate = function () {
        this.speed += 5; // Incrementa la velocidad en 5 unidades.
    }
}

let car1 = new Car("Toyota");
let car2 = new Car("Ford");
let car3 = new Car("HellCat");

console.log(car1.speed); // 0
console.log(car2.speed); // 0

console.log("Accelarate car2");

// Llamamos al método SOLO en car2.
// Esto demuestra que cada objeto mantiene su propio estado independiente.
car2.accelerate();

console.log(car1); // car1 sigue con speed: 0
console.log(car2); // car2 ahora tiene speed: 5