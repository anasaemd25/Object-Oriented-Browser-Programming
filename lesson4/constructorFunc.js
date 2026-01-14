function Animal(type, speed, iscute){
    this.type = type;
    this.speed = speed;
    this.iscute = iscute;
}

const a = new Animal("Dog", 10, true);
const b = new Animal("Cat", 6, true);
const c = new Animal("Alligator", 2, false);

console.log(a.type);
console.log(b);
