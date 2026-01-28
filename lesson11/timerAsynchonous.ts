class Person {
    age: number;

    constructor() {
        this.age = 0;
        setInterval(() => {
            this.age++;
            console.log("AGE IS: " + this.age);
        }, 1000);
    }

    printAge() {
        console.log("AGE IS: " + this.age);
    }
}

const p = new Person();
p.printAge();