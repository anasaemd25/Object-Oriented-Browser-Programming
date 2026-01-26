/*
EJERCICIO 4: CLASES (INTRODUCCIÓN)
Objetivo: Crear una clase Food que gestione el tipo de comidad y la cantidad, 
permitiendo "comer" (reducir cantidad) y describir la comida.
*/

// DEFINICIÓN DE CLASE (ES6 Syntax)
// Una clase es una plantilla para crear objetos. Es "azúcar sintáctico" sobre los prototipos de JS.
class Food {
    // EL CONSTRUCTOR
    // Es un método especial que se ejecuta automáticamente al crear una nueva instancia con 'new'.
    // Se usa para inicializar las propiedades del objeto.
    constructor(typeOfFood, quantity) {
        this.type = typeOfFood; // Propiedad: Tipo de comida (ej: 'Banana')
        this.qty = quantity;    // Propiedad: Cantidad (ej: 4)
    }

    // MÉTODOS
    // Funciones que pertenecen a la clase. No hace falta la palabra clave 'function'.

    whatIsThis() {
        console.log(this.type);
    }

    eatOne() {
        // Verificamos si queda comida antes de restar.
        if (this.qty > 0) {
            this.qty--; // Decrementamos la cantidad en 1.
            console.log("Slurp! One", this.type.toLowerCase(), "eaten.", this.qty, "remaining");
        }
        else {
            console.log("Sorry, no more", this.type.toLowerCase(), "remaining!")
        }
    }
}

// INSTANCIACIÓN
// Creamos objetos concretos a partir de la clase Food.
let banana = new Food('Banana', 4); // Llama al constructor('Banana', 4)
let bread = new Food('Bread', 2);

// USO DE MÉTODOS
banana.whatIsThis(); // "Banana"

banana.eatOne(); // Quedan 3
banana.eatOne(); // Quedan 2
banana.eatOne(); // Quedan 1
banana.eatOne(); // Quedan 0
banana.eatOne(); // "Sorry, no more..."

bread.eatOne(); // Funciona independientemente para el pan.
bread.eatOne();
bread.eatOne();