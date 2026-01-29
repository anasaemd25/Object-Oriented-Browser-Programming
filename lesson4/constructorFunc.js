// Constructor Function
// A "template" for creating objects of the same type (Animal)
// By convention, constructor functions start with a Capital letter.
function Animal(type, speed, iscute) {
    // 'this' refers to the new object being created
    this.type = type;   // Assign parameter 'type' to property 'type'
    this.speed = speed;
    this.iscute = iscute;
}

// The 'new' keyword does 4 things:
// 1. Creates a new empty object {}
// 2. Sets 'this' to point to that new object
// 3. Executes the function code (modifying 'this')
// 4. Returns the new object
const a = new Animal("Dog", 10, true);
const b = new Animal("Cat", 6, true);
const c = new Animal("Alligator", 2, false);

console.log(a.type); // Access property of object 'a'
console.log(b);      // Log entire object 'b'
