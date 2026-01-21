class Person {
    name: string;
    dateOfBirth: string;
    email: string;
    address: string;
    personId: number;

    constructor(name: string, dob: string, email: string, address: string) {
        this.name = name;
        this.dateOfBirth = dob;
        this.email = email;
        this.address = address;
        this.personId = Math.round(Math.random() * 1000000);
    }

    displayInfo() {
        console.log("--- Person Information ---");
        console.log("ID:", this.personId);
        console.log("Name:", this.name);
        console.log("Date of Birth:", this.dateOfBirth);
        console.log("Email:", this.email);
        console.log("Address:", this.address);
        console.log("--------------------------");
    }
}

interface CourseGrade{
    courseName: string;
    courseID: number;
    grade: number;
}

class Student extends Person{
    classIdentifier: string;
    dateOfAdmission: string;
    completedCourses: CourseGrade[];

    constructor(
        name: string, 
        dob: string, 
        email: string, 
        address: string, 
        classId: string, 
        doa: string
    ) {
        super(name, dob, email, address);
        this.classIdentifier = classId;
        this.dateOfAdmission = doa;
        this.completedCourses = [];
    }
}

let test = new Student("Jhon Kakas", "1.1.1999", "jhon@yahoo.com", "Demo road 1", "DIN25", "01.08.2025");
test.displayInfo();
console.log(test); 

