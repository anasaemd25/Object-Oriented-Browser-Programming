// Constructor Function for Car
function Car(make) {
    this.make = make;            // 'make' is passed as argument
    this.registration = "ABC000";// Default registration for all new cars
    this.speed = 0;              // Initial speed is 0

    // Method defined inside constructor
    // Every new Car object will have its own copy of this function
    this.accelerate = function () {
        this.speed += 5;         // Increases the speed of THIS specific car instance
    }
}

// Creating new instances of Car
let car1 = new Car("Toyota");
let car2 = new Car("Ford");
let car3 = new Car("HellCat"); // Note: Created but not used below

// Logging initial speeds
console.log(car1.speed);
console.log(car2.speed);


console.log("Accelarate car2");
// Call accelerate ONLY on car2
car2.accelerate();

// car1 speed remains 0, car2 speed becomes 5
console.log(car1);
console.log(car2);