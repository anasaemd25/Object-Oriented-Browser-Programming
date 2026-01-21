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

    // void significa que no devuelve nada
    displayInfo(): void {
        // super.displayInfo();
        // console.log(`Class Identifier: ${this.classIdentifier}`);
        // console.log(`Date of Admission: ${this.dateOfAdmission}`);
        // console.log(`Completed Courses: ${this.completedCourses.length}`);
        console.log('This is overridden method from Person class');
    }

    addCompletedCourse(courseName: string, courseId: string, grade: number): void {
        let newCourseGrade: CourseGrade = {
            courseName: courseName,
            courseId: courseId,
            grade: grade
        }
        this.completedCourses.push(newCourseGrade);
    }

    calculateGPA(): number {
        if (this.completedCourses.length == 0){
            return 0;
        }
        let sumGrades = this.completedCourses.reduce((sum, course)=> sum + course.grade, 0);
        let GPA = sumGrades / this.completedCourses.length;
        return GPA;
    }

    getHighestGrade(): number{
        if(this.completedCourses.length == 0){
            return 0;
        }
        let grades = this.completedCourses.map(course => course.grade);
        let highestGrade = Math.max(...grades);
        return highestGrade;
    }
    

}

let test = new Student("John Doe", "1.1.2000", "john@school.com", "Demo Road 1", "DIN25SP", "1.8.2025");
test.displayInfo();
console.log(test);

test.addCompletedCourse("Mathematics", "YY001-1001", 5);
test.addCompletedCourse("OOBP", "YY001-1111", 3);
test.addCompletedCourse("Suomi", "YY001-222", 5);
test.addCompletedCourse("Java", "YY001-9999", 2);
test.addCompletedCourse("Physics", "YY001-6969", 1);
console.log(test);

// Add 4 courses to your test student and completed
// Implement functionality to calculate the GPA of a student print to console

console.log("GPA is:", test.calculateGPA(), "and highest grade is:", test.getHighestGrade());
