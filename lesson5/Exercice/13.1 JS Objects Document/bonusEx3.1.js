// Constructor Function for Animal
// Includes properties and a method (function attached to an object)
function Animal(type, speed, isCute, strength) {
    this.type = type;
    this.speed = speed;
    this.isCute = isCute;
    this.strength = strength;

    // Method to simulate a battle with another animal object
    this.battle = function (opponent) {
        // Compare strength property of current instance (this) vs opponent
        if (this.strength > opponent.strength) {
            return this; // Return current object if it's stronger
        }
        else if (this.strength === opponent.strength) {
            return null; // Return null in case of a tie
        }
        else {
            return opponent; // Return the opponent if they are stronger
        }
    }
}

// Instantiate two Animal objects
const cat = new Animal("Cat", 15, true, 15);
const dog = new Animal("Dog", 20, true, 15);

// Call the battle method on the 'cat' object, passing 'dog' as the opponent
const result = cat.battle(dog);

// Check the result
if (result === null) {
    console.log("Tie");
} else {
    // If not null, result is the winner object. Access its 'type' property.
    console.log("winner is:", result.type);
}



/*
// Alternative implementation (Standalone function not attached to object)
function battle(combatant1, combatant2){
    if(combatant1.strength > combatant2.strength){
        console.log("combatant1 is the winner");
    }
    else if(combatant1.strength === combatant2.strength){
        return null;
    }
    else{
        console.log("combatant2 is the winner");
    }
}

const result = battle(cat, dog);
console.log("winner is:", result.type);
*/