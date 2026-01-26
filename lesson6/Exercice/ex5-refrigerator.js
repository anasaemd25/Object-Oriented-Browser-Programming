/*
EJERCICIO 5: INTERACCIÓN ENTRE CLASES
Objetivo: Crear una clase Refrigerator que almacene objetos de la clase Food.
Esto demuestra la relación "TIENE-UN" (Composición/Agregación).
Un Refrigerador TIENE (contiene) Comida.
*/

class Food {
    constructor(typeOfFood, quantity) {
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

class Refrigerator {
    constructor() {
        // Inicializamos el almacenamiento como un array vacío.
        // Aquí guardaremos las instancias de la clase Food.
        this.foodStorage = [];
    }

    // Método para meter comida en la nevera.
    // Recibe un objeto 'food' (instancia de Food).
    putFood(food) {
        this.foodStorage.push(food); // Lo añadimos al array.
    }

    // Método complejo: Busca un tipo de comida y la come.
    getAndEatFood(typeOfFood) {
        let found = false; // Bandera para saber si encontramos la comida.

        // Recorremos el inventario.
        for (let i = 0; i < this.foodStorage.length; i++) {
            // Comparamos nombres ignorando mayúsculas/minúsculas.
            if (typeOfFood.toLowerCase() === this.foodStorage[i].type.toLowerCase()) {

                // Si encontramos el objeto Food correcto, llamamos a SU propio método eatOne().
                // Delegamos la acción de "comer" al objeto Food.
                this.foodStorage[i].eatOne();

                found = true;
                break; // Terminamos el bucle, ya encontramos y comimos uno.
            }
        }

        // Si terminamos el bucle y la bandera sigue en false, no estaba.
        if (!found) {
            console.log("Sorry, no such food in this refrigerator!");
        }
    }

    // Muestra el inventario.
    getContents() {
        console.log("-----------");
        for (let i = 0; i < this.foodStorage.length; i++) {
            // Accedemos directamente a las propiedades .type y .qty de los objetos Food guardados.
            console.log("|", this.foodStorage[i].type, this.foodStorage[i].qty)
        }
        console.log("-----------")
    }
}

// --- USO PRINCIPAL ---

let r = new Refrigerator(); // Creamos la nevera vacía.

// Creamos comida.
let apple = new Food('Apple', 2);
let bananas = new Food('Banana', 3);

// Guardamos la comida en la nevera.
r.putFood(apple);
r.putFood(bananas);

// Checkeo inicial.
r.getContents();

// Comemos cosas.
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple'); // Intentamos comer una 3ra manzana (solo había 2, debería decir que se acabaron).
r.getAndEatFood('Kiwi');  // No existe (debería decir que no hay).

// Checkeo final.
r.getContents();