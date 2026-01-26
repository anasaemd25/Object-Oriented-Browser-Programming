// ==========================================
// HERENCIA, INTERFACES Y ENCAPSULAMIENTO
// ==========================================

// --- CLASE BASE (PADRE) ---
class Person {
    // Definición de tipos de propiedades
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

        // Asignación de un ID aleatorio al crearse la persona.
        this.personId = Math.round(Math.random() * 10000000);
    }

    // Método común para cualquier persona.
    displayInfo() {
        console.log(`Name: ${this.name}`);
        console.log(`Date of Birth: ${this.dateOfBirth}`);
        console.log(`Email: ${this.email}`);
        console.log(`Address: ${this.address}`);
        console.log(`Person ID: ${this.personId}`);
    }
}

// --- INTERFAZ ---
// Define la "forma" que debe tener un objeto.
// No genera código JS, solo sirve para verificación en TS.
interface CourseGrade {
    courseName: string;
    courseId: string;
    grade: number;
}

// --- CLASE HIJA (SUBCLASE) ---
// 'extends' significa que Student HEREDA todas las propiedades y métodos de Person.
class Student extends Person {
    classIdentifier: string;
    dateOfAdmission: string;

    // CAMPO PRIVADO (Sintaxis ECMAScript #)
    // El prefijo '#' hace que la propiedad sea verdaderamente privada en tiempo de ejecución (JS moderno).
    // Solo se puede acceder a ella dentro de esta clase.
    #completedCourses: CourseGrade[];

    constructor(
        name: string,
        dob: string,
        email: string,
        address: string,
        classId: string,
        doa: string
    ) {
        // 'super' llama al constructor de la clase padre (Person).
        // DEBE ser la primera línea en el constructor de la subclase.
        super(name, dob, email, address);

        // Método privado para generar ID
        this.classIdentifier = this.#generateClassIdentifier(classId);
        this.dateOfAdmission = doa;
        this.#completedCourses = []; // Inicializamos el array vacío.
    }

    // MÉTODOS PRIVADOS (#)
    // Solo usables dentro de la clase Student.
    #generateClassIdentifier(curriculum: string): string {
        return "GeneratedClassID";
    }

    // SOBRESCITURA (OVERRIDING)
    // Volvemos a definir displayInfo, reemplazando la versión del padre.
    displayInfo(): void {
        // super.displayInfo(); // Podríamos llamar a la versión original si quisiéramos.
        console.log('This is overridden method from Person class');
    }

    addCompletedCourse(courseName: string, courseId: string, grade: number) {
        // Creamos un objeto que cumple con la interfaz CourseGrade.
        let newCourseGrade: CourseGrade = {
            courseName: courseName,
            courseId: courseId,
            grade: grade
        }
        this.#completedCourses.push(newCourseGrade);
    }

    // --- GETTERS Y SETTERS ---
    // Permiten controlar el acceso a las propiedades privadas.
    // Se usan como propiedades: student.completedCourses (sin paréntesis).

    get completedCourses(): CourseGrade[] {
        // Podemos añadir lógica antes de devolver el valor (ej: logging).
        return this.#completedCourses;
    }

    // Setter tradicional (Sintaxis 'set' palabra clave)
    set completedCourses(value: CourseGrade[]) {
        // Aquí podríamos validar 'value' antes de asignarlo.
        this.#completedCourses = value;
    }

    // Método setter alternativa "Java-style"
    setCompletedCourses(value: CourseGrade[]) {
        this.#completedCourses = value;
    }

    // Método getter alternativo "Java-style"
    getCompletedCourses(): CourseGrade[] {
        return this.#completedCourses;
    }
}

// --- USO ---

let test = new Student("John Doe", "1.1.2000", "john@school.com", "Demo Road 1", "DIN25SP", "1.8.2025");

test.displayInfo(); // Ejecuta la versión sobrescrita de Student.

// Acceso mediante Getter
console.log(test.completedCourses);

// test.#generateClassIdentifier(...) // ERROR: Es privado.
// test.#completedCourses // ERROR: Es privado.

test.addCompletedCourse("Mathematics", "YY001-1001", 4);
console.log(test);

// Uso de setters
test.completedCourses = []; // Usa 'set completedCourses'
test.setCompletedCourses([]); // Usa el método normal

test.classIdentifier = "some new value"; // Público, acceso directo.

console.log(test);