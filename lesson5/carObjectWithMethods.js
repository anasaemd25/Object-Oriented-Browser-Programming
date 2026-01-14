let car = {
    make: "Toyota",
    registration: "ABC000",
    speed: 0,
    accelerate: function(){
        this.speed += 5;
    }
}

let car2 = {
    make: "Audi",
    registration: "GHJ001",
    speed: 0,
    accelerate: function(){
        this.speed += 5;
    }
}


console.log(car.speed);
car.speed = 10;
console.log(car.speed);
car.accelerate();
car.accelerate();
console.log(car.speed);

console.log(car2.speed);
