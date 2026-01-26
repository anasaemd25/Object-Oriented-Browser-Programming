// ==========================================
// FUNCIONES CONSTRUCTORAS (CONSTRUCTOR FUNCTIONS)
// ==========================================

// Una función constructora es una plantilla "molde" para crear múltiples objetos
// con la misma estructura (propiedades y métodos), pero con datos diferentes.
// Por convención, el nombre empieza con Mayúscula (Animal, no animal).

function Animal(type, speed, iscute) {
    // 'this' hace referencia al NUEVO objeto que se está creando en ese momento.
    // Estamos asignando los argumentos recibidos a las propiedades del nuevo objeto.

    this.type = type;   // Propiedad 'type' = argumento 'type'
    this.speed = speed; // Propiedad 'speed' = argumento 'speed'
    this.iscute = iscute; // Propiedad 'iscute' = argumento 'iscute'
}

// Para usar una función constructora, DEBEMOS usar la palabra clave 'new'.
// 'new' hace 3 cosas importantes:
// 1. Crea un nuevo objeto vacío {}.
// 2. Hace que 'this' apunte a ese nuevo objeto dentro de la función.
// 3. Devuelve el objeto automáticamente.

const a = new Animal("Dog", 10, true);
// 'a' es ahora: { type: "Dog", speed: 10, iscute: true }

const b = new Animal("Cat", 6, true);
// 'b' es ahora: { type: "Cat", speed: 6, iscute: true }

const c = new Animal("Alligator", 2, false);

console.log(a.type); // "Dog"
console.log(b);      // Imprime todo el objeto 'b'
