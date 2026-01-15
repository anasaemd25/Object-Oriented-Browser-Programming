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

class Refrigerator{
    constructor(){
        this.foodStorage = [];
    }

    putFood(food){
        // add food to the storage in this refrigerator
        this.foodStorage.push(food);
    }

    getAndEatFood(typeOfFood){
        let found = false;
        for (let i = 0; i < this.foodStorage.length; i++) {
            if (typeOfFood.toLowerCase() === this.foodStorage[i].type.toLowerCase()) {
                this.foodStorage[i].eatOne();
                found = true;
                break;
            }
        }
        if (!found) {
            console.log("Sorry, no such food in this refrigerator!");
        }
    }

    getContents(){
        console.log("-----------");
        // Print contents
        for(let i = 0; i < this.foodStorage.length; i++){
            console.log("|", this.foodStorage[i].type, this.foodStorage[i].qty)
        }
        console.log("-----------")
    }
}

let r = new Refrigerator();
let apple = new Food('Apple', 2);
let bananas = new Food('Banana', 3);
r.putFood(apple);
r.putFood(bananas);
r.getContents();
r.getAndEatFood('Apple');
r.getAndEatFood('Apple');
r.getAndEatFood('Banana');
r.getAndEatFood('Apple');
r.getAndEatFood('Kiwi');
r.getContents();