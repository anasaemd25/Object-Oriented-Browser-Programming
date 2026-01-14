function Animal(type, speed, isCute, strength){
    this.type = type;
    this.speed = speed;
    this.isCute = isCute;
    this.strength = strength;
    this.battle = function(opponent){
        if(this.strength > opponent.strength){
            return this;
        }
        else if(this.strength === opponent.strength){
            return null;
        }
        else{
            return opponent;
        }
    }
}

const cat = new Animal("Cat", 15, true, 15);
const dog = new Animal("Dog", 20, true, 15);

const result = cat.battle(dog);
if(result === null){
    console.log("Tie");
}else{
    console.log("winner is:", result.type);
}



/*
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