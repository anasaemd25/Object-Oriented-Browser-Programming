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
        this.personId = Math.round( Math.random() * 10000000 );
    }

    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Date of Birth: ${this.dateOfBirth}`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address}`);
        console.log(`Person ID: ${this.personId}`);
    }
}

interface CourseGrade {
    courseName: string;
    courseId: string;
    grade: number;
}

class Student extends Person {
    classIdentifier: string;
    dateOfAdmission: string;
    #completedCourses: CourseGrade[];

    constructor(
        name: string, 
        dob: string, 
        email: string, 
        address: string, 
        classId: string, 
        doa: string
    ) {
        super(name, dob, email, address);
        //this.classIdentifier = classId;
        this.classIdentifier = this.#generateClassIdentifier(classId);
        this.dateOfAdmission = doa;
        this.#completedCourses = [];
    }

    // method to generate class identifier based on admission year
    #generateClassIdentifier(curriculum: string): string {
        // some logic to generate class identifier
        return "GeneratedClassID";
    }

    displayInfo(): void {
        // super.displayInfo();
        // console.log(`Class Identifier: ${this.classIdentifier}`);
        // console.log(`Date of Admission: ${this.dateOfAdmission}`);
        // console.log(`Completed Courses: ${this.completedCourses.length}`);
        console.log('This is overridden method from Person class');
    }

    addCompletedCourse(courseName: string, courseId: string, grade: number) {
        let newCourseGrade: CourseGrade = {
            courseName: courseName,
            courseId: courseId,
            grade: grade
        }
        this.#completedCourses.push(newCourseGrade);
    }

    get completedCourses(): CourseGrade[] {

        // we could have here some other logic if needed
        // but now just return the private field directely
        return this.#completedCourses;
    }

    // alternative getter syntax with regular method
    getCompletedCourses(): CourseGrade[] {
        return this.#completedCourses;
    }

    set completedCourses(value: CourseGrade[]) {
        // we can have anylogic here if needed, for example some validation or something else
        this.#completedCourses = value;
    }
    
    // alternative setter syntax with regular method
    setCompletedCourses(value: CourseGrade[]) {
        this.#completedCourses = value;
    }

    // Then implement functionality to calculate the GPA of a student -> print to console. 
}

let test = new Student("John Doe", "1.1.2000", "john@school.com", "Demo Road 1", "DIN25SP", "1.8.2025");
test.displayInfo();
console.log(test.completedCourses);
console.log(test.getCompletedCourses());
console.log(test.dateOfAdmission);
// console.log(test.#generateClassIdentifier("DIN25SP"));  This should give an error because the method is private

test.addCompletedCourse("Mathematics", "YY001-1001", 4);
console.log(test);
test.completedCourses = [];  // This should give an error because completedCourses has no setter
test.setCompletedCourses([]); // This should work via the regular method implementation

test.classIdentifier = "some new value";

// Add at least four courses to your test student and scompleted.
console.log(test);