function Car(make){
    this.make = make;
    this.registration = "ABC000";
    this.speed = 0;
    this.accelerate= function(){
        this.speed += 5;
    }
}

let car1 = new Car("Toyota");
let car2 = new Car("Ford");
let car3 = new Car("HellCat");

console.log(car1.speed);
console.log(car2.speed);


console.log("Accelarate car2");
car2.accelerate();
console.log(car1);
console.log(car2);