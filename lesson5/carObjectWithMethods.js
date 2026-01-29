// Object Literal with properties and a method
let car = {
    make: "Toyota",
    registration: "ABC000",
    speed: 0,
    // Method: A function stored as a property
    accelerate: function () {
        this.speed += 5; // 'this' refers to the 'car' object itself
    }
}

// Another distinct object literal
let car2 = {
    make: "Audi",
    registration: "GHJ001",
    speed: 0,
    accelerate: function () {
        this.speed += 5;
    }
}


console.log(car.speed); // Access property

// Modifying property directly
car.speed = 10;
console.log(car.speed);

// Calling the method to modify state
car.accelerate(); // speed becomes 15
car.accelerate(); // speed becomes 20
console.log(car.speed);

console.log(car2.speed); // car2 is independent, speed is still 0
