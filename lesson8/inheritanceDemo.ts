interface CourseGrade {
    courseName: string;
    courseId: string;
    grade: number;
}

// Clase base Person, representa una persona genérica
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
        // Genera un ID aleatorio para la persona
        this.personId = Math.round(Math.random() * 100000);
        // No es necesario pasar personId como parámetro, se genera automáticamente
    }

    displayInfo(){
        console.log("---------------------");
        console.log("Personal Details");
        console.log(`ID: ${this.personId}`);
        console.log(`Name: ${this.name}`);
        console.log(`DOB: ${this.dateOfBirth}`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address}`);
    }
}

// Ejemplo de creación de un objeto Person
let test1 = new Person("Jose", "25/12/02", "jose@gmail.com", "Satama");
// test1.displayInfo(); // Antes de llamar al método, hay que crear el objeto y luego usar variableNombre.metodoNombre()

// Clase Student hereda de Person y añade funcionalidad específica de estudiantes
class Student extends Person{
    #completedCourses: CourseGrade[]; // Array privado para almacenar los cursos completados
    classIdentifier: string;
    dateOfAdmission: string;

    constructor(
        name: string, 
        dob: string, 
        email: string, 
        address: string, 
        classId: string, // classId solo se usa aquí para generar el identificador de clase
        doa: string, 
    ){
        super(name, dob, email, address);
        // Genera el identificador de clase usando el método privado y el classId proporcionado
        this.classIdentifier = this.#generateClassIdentifier(classId);
        this.dateOfAdmission = doa;
        // Inicializa el array de cursos completados como vacío
        this.#completedCourses = [];
    }

    // Método privado para generar un identificador de clase único
    #generateClassIdentifier(curriculum: string){
        // Devuelve un string con el formato COURSE-[curriculum]-[número aleatorio]
        return `COURSE-${curriculum}-${Math.floor(Math.random()*2132534)}`;
    }

    // Sobrescribe el método displayInfo para mostrar también info de estudiante
    displayInfo() {
        super.displayInfo(); // Llama al método de la clase padre
        console.log(`ClassId: ${this.classIdentifier}`);
        console.log(`DOA: ${this.dateOfAdmission}`);
        console.log("---------------------");
    }

    // Añade un curso completado al array privado
    addCompletedCourse(courseName: string, courseId: string, grade: number){
        // Crea un objeto CourseGrade con los datos proporcionados
        let newCourseInfo: CourseGrade = {
            courseName,
            courseId,
            grade
        };
        // Lo añade al array privado de cursos completados
        this.#completedCourses.push(newCourseInfo);
    }

    // Getter para acceder a los cursos completados (permite leerlos desde fuera)
    get completedCourses(): CourseGrade[] {
        return this.#completedCourses;
    }

    // Setter para reemplazar el array de cursos completados (permite modificarlo desde fuera)
    set completedCourses(value: CourseGrade[]){
        this.#completedCourses = value;
    }

    // Calcula el GPA (promedio de notas) de los cursos completados
    calculateGPA(){
        if(this.#completedCourses.length === 0){
            console.log("No grades yet");
            // Si no hay cursos, termina la función aquí
            return;
        }
        // Suma todas las notas usando reduce
        let total = this.#completedCourses.reduce((a, b) => a + b.grade, 0);
        // Calcula el promedio dividiendo por la cantidad de cursos
        let GPA = total / this.#completedCourses.length;
        // Muestra el GPA con dos decimales
        console.log(`GPA is: ${GPA.toFixed(2)} `);
    }
}

// Ejemplo de uso de la clase Student
let student1 = new Student("Jose", "25/12/02", "jose@gmail.com", "Satama", "DIN25", "12/12/2025");
student1.displayInfo();
console.log("-------------Now we add some courses--------------------");
student1.addCompletedCourse("Physics", "DIN25-Physics", 1);
student1.addCompletedCourse("Meth", "DIN25-Meth", 4);
student1.addCompletedCourse("OOP", "DIN25-OOP", 5);
console.log("Print the courses", student1.completedCourses);
student1.displayInfo();
student1.calculateGPA();