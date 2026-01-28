/**
 * PART 1 & 2: Base structures
 */

// Interface defines the "shape" of a course object
interface CourseGrade {
    courseName: string;
    courseId: string;
    grade: number;
}

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
        // Generates a random ID between 0 and 10,000,000
        this.personId = Math.round(Math.random() * 10000000);
    }

    displayInfo() {
        console.log(`--- Personal Info ---`);
        console.log(`ID: ${this.personId}`);
        console.log(`Name: ${this.name}`);
        console.log(`DOB: ${this.dateOfBirth}`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address}`);
    }
}

/**
 * PART 3: The Specialized Student Class
 */
class Student extends Person {
    classIdentifier: string;
    dateOfAdmission: string;
    // The '#' makes this field TRULY private (hard encapsulation)
    #completedCourses: CourseGrade[];

    constructor(
        name: string, 
        dob: string, 
        email: string, 
        address: string, 
        classId: string, 
        doa: string
    ) {
        // super() calls the constructor of the Person class
        super(name, dob, email, address);
        
        this.dateOfAdmission = doa;
        this.#completedCourses = [];
        // We use a private method to set a value during construction
        this.classIdentifier = this.#generateClassIdentifier(classId);
    }

    // Private method: only accessible inside this class
    #generateClassIdentifier(curriculum: string): string {
        return "COURSE-" + curriculum + "-" + Math.floor(Math.random() * 100);    
    }

    // OVERRIDING: We rewrite the parent's method to add more details
    displayInfo(): void {
        super.displayInfo(); // This runs the logic from Person
        console.log(`Class ID: ${this.classIdentifier}`);
        console.log(`Admission Date: ${this.dateOfAdmission}`);
        console.log(`Courses Completed: ${this.#completedCourses.length}`);
        console.log(`---------------------`);
    }

    addCompletedCourse(courseName: string, courseId: string, grade: number) {
        const newCourseGrade: CourseGrade = { courseName, courseId, grade };
        this.#completedCourses.push(newCourseGrade);
    }

    /** * ACCESSORS (Getters & Setters)
     * These allow us to control how the private #completedCourses is handled
     */
    
    // Usage: student.completedCourses (Looks like a property, acts like a method)
    get completedCourses(): CourseGrade[] {
        return this.#completedCourses;
    }

    // Usage: student.completedCourses = []
    set completedCourses(value: CourseGrade[]) {
        console.log("Updating courses via setter property...");
        this.#completedCourses = value;
    }

    // Alternative: Regular method style (Common in Java/C#)
    getCompletedCourses(): CourseGrade[] {
        return this.#completedCourses;
    }

    setCompletedCourses(value: CourseGrade[]) {
        console.log("Updating courses via regular method...");
        this.#completedCourses = value;
    }

    /**
     * PART 4: GPA Calculation Logic
     */
    calculateGPA(): void {
        if (this.#completedCourses.length === 0) {
            console.log(`GPA: 0.0 (No courses completed for ${this.name})`);
            return;
        }

        // reduce sums up all grades. The '0' at the end is the starting point.
        const sum = this.#completedCourses.reduce((acc, course) => acc + course.grade, 0);
        const gpa = sum / this.#completedCourses.length;

        console.log(`Final GPA for ${this.name}: ${gpa.toFixed(2)}`);
    }
}

/**
 * EXECUTION AND VALIDATION
 */

// 1. Instantiate Student
let testStudent = new Student("John Doe", "01-01-2000", "john@school.com", "Demo Road 1", "DIN25SP", "01-08-2025");

// 2. Add 4 courses
testStudent.addCompletedCourse("Mathematics", "MATH101", 4);
testStudent.addCompletedCourse("Physics", "PHYS202", 3);
testStudent.addCompletedCourse("Programming", "PROG303", 5);
testStudent.addCompletedCourse("History", "HIST404", 4);

// 3. Display Info & GPA
testStudent.displayInfo();
testStudent.calculateGPA();

// 4. Privacy Check (Uncommenting these would cause TypeScript errors)
// console.log(testStudent.#completedCourses); // Error: Private field
// testStudent.#generateClassIdentifier("TEST"); // Error: Private method

// 5. Demonstrating Setters
testStudent.setCompletedCourses([]); // Using the regular method
console.log("Courses after method clear:", testStudent.completedCourses.length);

testStudent.completedCourses = [{ courseName: "Logic", courseId: "LOGIC1", grade: 5 }]; // Using the property setter
console.log("Courses after property setter:", testStudent.completedCourses.length);