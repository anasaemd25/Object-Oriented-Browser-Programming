/*
Exercise 4 (objects/exercises/4-classes.js): 
Create a class for Food which allows the user to set the type of food and quantity. 
The class should have a method, which can be used to eat the food and quantity 
will decrease accordingly and a method to be able to describe what type of food it is.
You should get this output:
Banana
Slurp! One banana eaten. 3 remaining
Slurp! One banana eaten. 2 remaining
Slurp! One banana eaten. 1 remaining
Slurp! One banana eaten. 0 remaining
Sorry, no more bananas remaining!
*/

// Define a class Named Food. Classes are blueprints for creating objects.
class Food {
    // The constructor method is called automatically when a new instance is created.
    constructor(typeOfFood, quantity) {
        this.type = typeOfFood; // Set the property 'type'
        this.qty = quantity;    // Set the property 'qty'
    }

    // Method to print the type of food
    whatIsThis() {
        console.log(this.type);
    }

    // Method to simulate eating one unit of food
    eatOne() {
        // Check if there is any food left
        if (this.qty > 0) {
            this.qty--; // Decrement quantity by 1
            // Log the action and remaining quantity
            console.log("Slurp! One", this.type.toLowerCase(), "eaten.", this.qty, "remaining");
        }
        else {
            console.log("Sorry, no more", this.type.toLowerCase(), "remaining!")
        }
    }
}

// Create new instances of the Food class
let banana = new Food('Banana', 4); // Call to the constructor method
let bread = new Food('Bread', 2);   // Extra instance

// Call methods on the instances
banana.whatIsThis();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne(); // This should trigger the "no more remaining" message

// Operate on the second instance
bread.eatOne();
bread.eatOne();
bread.eatOne();