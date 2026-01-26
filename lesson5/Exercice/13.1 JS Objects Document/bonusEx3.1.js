// ==========================================
// MÉTODOS EN FUNCIONES CONSTRUCTORAS
// ==========================================

// Definimos la función constructora 'Animal'.
function Animal(type, speed, isCute, strength) {
    this.type = type;
    this.speed = speed;
    this.isCute = isCute;
    this.strength = strength;

    // Método 'battle': Una función asignada a una propiedad del objeto.
    // Permite que el animal "luche" contra otro (opponent).
    this.battle = function (opponent) {

        // 'this' se refiere al animal que INICIA la batalla (el que llama al método).
        // 'opponent' es el otro objeto Animal que pasamos como argumento.

        if (this.strength > opponent.strength) {
            return this; // Si mi fuerza es mayor, gano yo (devuelvo mi propio objeto).
        }
        else if (this.strength === opponent.strength) {
            return null; // Empate.
        }
        else {
            return opponent; // Si no, gana el oponente.
        }
    }
}

// Creamos dos instancias de Animal.
const cat = new Animal("Cat", 15, true, 15);
const dog = new Animal("Dog", 20, true, 15);

// El gato (cat) inicia la batalla contra el perro (dog).
// Dentro del método 'battle': 'this' es cat, 'opponent' es dog.
const result = cat.battle(dog);


if (result === null) {
    console.log("Tie");
} else {
    // result contiene el objeto ganador completo. Accedemos a su propiedad .type
    console.log("winner is:", result.type);
}