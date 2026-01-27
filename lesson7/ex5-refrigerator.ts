/*
EJERCICIO 5 (VERSIÓN TYPESCRIPT)
Objetivo: Mismo ejercicio del refrigerador, pero usando TIPADO ESTÁTICO con TypeScript.
*/

export class Food {
    // EN TYPESCRIPT, DEBEMOS DECLARAR LAS PROPIEDADES DE LA CLASE.
    // Esto no era necesario en JS puro (se declaraban en el constructor),
    // pero TS necesita saber qué propiedades existen y de qué tipo son.
    type: string; // La propiedad 'type' debe ser siempre un texto.
    qty: number;  // La propiedad 'qty' debe ser siempre un número.

    constructor(typeOfFood: string, quantity: number) {
        // Validamos los tipos también en los argumentos del constructor.
        this.type = typeOfFood;
        this.qty = quantity;
    }

    whatIsThis() {
        console.log(this.type);
    }

    eatOne() {
        if (this.qty > 0) {
            this.qty--;
            console.log("Slurp! One", this.type.toLowerCase(), "eaten.", this.qty, "remaining");
        }
        else {
            console.log("Sorry, no more", this.type.toLowerCase(), "remaining!")
        }
    }
}

export class Refrigerator {
    // Declaramos un array que SOLO puede contener objetos de tipo 'Food'.
    // Si intentamos meter un número o string aquí, TS dará error.
    foodStorage: Food[];

    constructor() {
        this.foodStorage = [];
    }

    // El parámetro 'food' DEBE ser una instancia de la clase Food.
    putFood(food: Food) {
        this.foodStorage.push(food);
    }

    getAndEatFood(typeOfFood: string) {
        let found = false;
        for (let i = 0; i < this.foodStorage.length; i++) {

            if (typeOfFood.toLowerCase() === this.foodStorage[i].type.toLowerCase()) {
                this.foodStorage[i].eatOne();
                found = true;

                // Lógica adicional: Eliminar del array si se acaba.
                if (this.foodStorage[i].qty == 0) {
                    // .splice(índice, cantidad) elimina elementos del array.
                    this.foodStorage.splice(i, 1);
                }
                break;
            }
        }
        if (!found) {
            console.log("Sorry, no such food in this refrigerator!");
        }
    }

    getContents() {
        console.log("-----------");
        for (let i = 0; i < this.foodStorage.length; i++) {
            console.log("|", this.foodStorage[i].type, this.foodStorage[i].qty)
        }
        console.log("-----------")
    }
}

// USO
// Aunque el código de uso es igual a JS, TS nos protege.
// Ej: r.putFood("Manzana") daría error de compilación porque "Manzana" es string, no Food.

let r = new Refrigerator();
let apple = new Food('Apple', 2);
let bananas = new Food('Banana', 3);
r.putFood(apple);
r.putFood(bananas);
r.getContents();
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple');
r.getAndEatFood('Kiwi');
r.getContents();


// ...use Food here...