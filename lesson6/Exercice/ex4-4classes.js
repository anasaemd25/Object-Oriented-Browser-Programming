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

class Food{
    constructor(typeOfFood, quantity){
        this.type = typeOfFood;
        this.qty = quantity;
    }

    whatIsThis(){
        console.log(this.type);
    }

    eatOne(){
        if(this.qty > 0){
            this.qty--;
            console.log("Slurp! One", this.type.toLowerCase(), "eaten.", this.qty, "remaining");
        }
        else{
            console.log("Sorry, no more", this.type.toLowerCase(), "remaining!")
        }
    }
}

let banana = new Food('Banana', 4); // Call to the constructor method
let bread = new Food('Bread', 2);   // Extra
banana.whatIsThis();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
banana.eatOne();
bread.eatOne();
bread.eatOne();
bread.eatOne();