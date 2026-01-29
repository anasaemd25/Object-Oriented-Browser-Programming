interface CourseGrade {
    courseName: string;
    courseId: string;
    grade: number;
}

// Base class Person, represents a generic person
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
        // Generates a random ID for the person
        this.personId = Math.round(Math.random() * 100000);
        // personId is not passed as a parameter; it is generated automatically inside the constructor
    }

    displayInfo() {
        console.log("---------------------");
        console.log("Personal Details");
        console.log(`ID: ${this.personId}`);
        console.log(`Name: ${this.name}`);
        console.log(`DOB: ${this.dateOfBirth}`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address}`);
    }
}

// Example of creating a Person object
let test1 = new Person("Jose", "25/12/02", "jose@gmail.com", "Satama");
// test1.displayInfo(); // Before calling the method, the object must be created. Usage: objectName.methodName()

// Class Student inherits from Person and adds specific student functionality
class Student extends Person {
    #completedCourses: CourseGrade[]; // Private array (using # syntax) to store completed courses
    classIdentifier: string;
    dateOfAdmission: string;

    constructor(
        name: string,
        dob: string,
        email: string,
        address: string,
        classId: string, // classId is only used here to generate the classIdentifier
        doa: string,
    ) {
        // super() calls the constructor of the parent class (Person)
        super(name, dob, email, address);

        // Use the internal private method to generate a unique class identifier
        this.classIdentifier = this.#generateClassIdentifier(classId);
        this.dateOfAdmission = doa;

        // Initialize the private array of completed courses as empty
        this.#completedCourses = [];
    }

    // Private method to generate a unique class identifier
    #generateClassIdentifier(curriculum: string) {
        // Returns a string in the format COURSE-[curriculum]-[random number]
        return `COURSE-${curriculum}-${Math.floor(Math.random() * 2132534)}`;
    }

    // Overrides the displayInfo method to show student-specific info as well
    displayInfo() {
        super.displayInfo(); // Call the parent class's displayInfo method first
        console.log(`ClassId: ${this.classIdentifier}`);
        console.log(`DOA: ${this.dateOfAdmission}`);
        console.log("---------------------");
    }

    // Adds a completed course to the private array
    addCompletedCourse(courseName: string, courseId: string, grade: number) {
        // Create a CourseGrade object with the provided data
        let newCourseInfo: CourseGrade = {
            courseName,
            courseId,
            grade
        };
        // Push it to the private completedCourses array
        this.#completedCourses.push(newCourseInfo);
    }

    // Getter to access completed courses (allows reading from outside)
    get completedCourses(): CourseGrade[] {
        return this.#completedCourses;
    }

    // Setter to replace the array of completed courses (allows modification from outside)
    set completedCourses(value: CourseGrade[]) {
        this.#completedCourses = value;
    }

    // Calculates the GPA (average grade) of the completed courses
    calculateGPA() {
        if (this.#completedCourses.length === 0) {
            console.log("No grades yet");
            // If there are no courses, exit the function early
            return;
        }
        // Sum all grades using the reduce method
        let total = this.#completedCourses.reduce((a, b) => a + b.grade, 0);

        // Calculate average by dividing total by the number of courses
        let GPA = total / this.#completedCourses.length;

        // Display GPA formatted to 2 decimal places
        console.log(`GPA is: ${GPA.toFixed(2)} `);
    }
}

// Example usage of the Student class
let student1 = new Student("Jose", "25/12/02", "jose@gmail.com", "Satama", "DIN25", "12/12/2025");
student1.displayInfo();
console.log("-------------Now we add some courses--------------------");
student1.addCompletedCourse("Physics", "DIN25-Physics", 1);
student1.addCompletedCourse("Meth", "DIN25-Meth", 4);
student1.addCompletedCourse("OOP", "DIN25-OOP", 5);
console.log("Print the courses", student1.completedCourses);
student1.displayInfo();
student1.calculateGPA();