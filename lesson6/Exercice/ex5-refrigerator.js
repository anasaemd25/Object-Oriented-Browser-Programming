/*
Exercise 5: Create a class for Refrigerator which is capable of storing food. 
The class should have couple of different methods.
· putFood – stores food in refrigerator
· getAndEatFood – gets and consumes the specified food and amount from refrigerator, 
indicates if there is no such food available, indicates if last food of the type was eaten
· getContents – display list of what food and how many is inside the refrigerator
Fill your refrigerator with different Foods and then eat them. 
Validate the everything works as intended.
Should give about the following output:
-----------
| Apple 2
| Banana 3
-----------
Slurp! One apple eaten. 1 remaining
Slurp! One apple eaten. 0 remaining
Slurp! One banana eaten. 2 remaining
Sorry, no such food in this refrigerator!
-----------
| Banana 2
-----------
*/

// Class representing a Food item
class Food {
    constructor(typeOfFood, quantity) {
        this.type = typeOfFood;
        this.qty = quantity;
    }

    whatIsThis() {
        console.log(this.type);
    }

    // Method to decrease quantity
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

// Class representing the Refrigerator container
class Refrigerator {
    constructor() {
        // Initialize an empty array to store Food objects
        this.foodStorage = [];
    }

    // Stores a Food object in the refrigerator
    putFood(food) {
        // add food to the storage in this refrigerator
        this.foodStorage.push(food);
    }

    // Finds a food item by name and eats one unit
    getAndEatFood(typeOfFood) {
        let found = false; // Flag to track if food was found

        // Loop through everything in storage
        for (let i = 0; i < this.foodStorage.length; i++) {
            // Check if the current item matches the requested type (case-insensitive)
            if (typeOfFood.toLowerCase() === this.foodStorage[i].type.toLowerCase()) {
                // Call the eatOne method of the found Food object
                this.foodStorage[i].eatOne();
                found = true;
                break; // Stop searching once found
            }
        }

        // If the loop finishes without finding the food
        if (!found) {
            console.log("Sorry, no such food in this refrigerator!");
        }
    }

    // Method to display all contents of the refrigerator
    getContents() {
        console.log("-----------");
        // Print contents by iterating through the storage
        for (let i = 0; i < this.foodStorage.length; i++) {
            console.log("|", this.foodStorage[i].type, this.foodStorage[i].qty)
        }
        console.log("-----------")
    }
}

// Usage Example
let r = new Refrigerator();       // Create Refrigerator
let apple = new Food('Apple', 2); // Create Food: Apple
let bananas = new Food('Banana', 3); // Create Food: Banana

r.putFood(apple);   // Put Apple in Refrigerator
r.putFood(bananas); // Put Banana in Refrigerator

r.getContents(); // Check contents

// Eat some food
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple'); // Consuming more (might be empty)
r.getAndEatFood('Kiwi');  // Trying to eat something that doesn't exist

r.getContents(); // property check final state