function Person() {
    this.age = 0;

    // classical function syntax leads to 'this' being undefined inside the setInterval callback
    // setInterval(function growUp() {
    //     this.age++;
    //     console.log(`Age is now: ${this.age}`);
    // }, 1000);

    // arrow function syntax retains the 'this' context from the enclosing scope (Person function)
    setInterval(() => {
        this.age++;
        console.log(`Age is now: ${this.age}`);
    }, 1000);

    this.printAge = function() {
        console.log(`Current age: ${this.age}`);
    }
}

const person = new Person();
person.printAge(); // This will likely print "Current age: 0" always