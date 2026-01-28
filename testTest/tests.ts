/*
class Food {
    type: string;
    quantity: number;

    constructor(typeOfFood: string, qty: number){
        this.type = typeOfFood;
        this.quantity = qty;
    }

    whatIsThis(){
        console.log(this.type, this.quantity);
    }

    eatOne(){
        if (this.quantity > 0){
            this.quantity--;
            console.log("Slurp! One " + this.type.toLowerCase() + " eaten. " + this.quantity + " remaining")
        }else{
            console.log("Sorry, no more " + this.type.toLowerCase(), "remaining!") 
        }
    }
}

// let banana = new Food("banana", 1);
// banana.whatIsThis();
// banana.eatOne();

class Refrigerator{
    storage: Food[]

    constructor(){
        this.storage = []
    }

    putFood(food: Food) {
        this.storage.push(food);
    }

    getAndEatFood(typeOfFood: string){
        let found = false;
        for (let i = 0; i < this.storage.length; i++){
            if (typeOfFood.toLowerCase() === this.storage[i].type.toLowerCase()){
                this.storage[i].eatOne();
                found = true;
                
                if(this.storage[i].quantity === 0){
                    this.storage.splice(i, 1);
                }
                break;
            }
        }
        if(!found){
            console.log("Sorry, no such food in this refrigerator!", typeOfFood );
        }
    }

    getContents(){
        console.log("---------");
        for (let i = 0; i < this.storage.length; i++){
        console.log("|", this.storage[i].type, this.storage[i].quantity);
        }
        console.log("---------");
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
*/

class Person {
    name: string;
    dateOfBirth: string;
    email: string;
    address: string;
    personId: number;

    constructor(name: string, dob: string, email: string, address: string){
        this.name = name;
        this.dateOfBirth = dob;
        this.email = email;
        this.address = address;
        this.personId = Math.round(Math.random() * 1000);
    }

    displayInfo(){
        console.log(this.name, this.dateOfBirth, this.email, this.address, this.personId);
    }
}

interface CourseGrade{
    courseName: string;
    courseId: string;
    grade: number;
}

class Student extends Person{
    classIdentifier: string;
    dateOfAdmission: string;
    #completedCourses: CourseGrade[];

    constructor(name: string, dob: string, email: string, address: string, classId: string, doa: string){
        super(name, dob, email, address);
        this.classIdentifier = this.#generateClassIdentifier(classId);
        this.dateOfAdmission = doa;
        this.#completedCourses = [];
    }

    #generateClassIdentifier(curriculum: String){
        return "GeneratedClassID";
    }

    displayInfo(): void{
        console.log("Override");
    }

    addCompletedCourse(courseName: string, courseId: string, grade: number){
        let newCourseGrade: CourseGrade = {
            courseName: courseName,
            courseId: courseId,
            grade: grade
        }
        this.#completedCourses.push(newCourseGrade);
    }

    getCompletedCourses(): CourseGrade[] {
        return this.#completedCourses;
    }

    setCompletedCourses(value: CourseGrade[]) {
        this.#completedCourses = value;
    }

}


let kakas = new Person ("Kakas", "11/11", "kakas@yahoo.com", "SATAMATIE" );
kakas.displayInfo();

