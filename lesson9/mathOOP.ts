/*
Exercise 1: Core Shape Properties - CLASE BASE Y SUBCLASES
Requisitos:
· Propiedades privadas x, y (coordenadas del centro para círculo, esquina superior izquierda para rectángulo)
· Propiedad privada color
· Getters/setters públicos para posición y color
· Métodos moveTo() y moveBy() para movimiento
· calculateArea() y calculatePerimeterLength() que deben ser sobrescritos
*/

class Shape {
    // Propiedades PRIVADAS con convención _nombre (o usar #nombre en TypeScript moderno)
    private _x: number; // Coordenada X del centro/esquina superior izquierda
    private _y: number; // Coordenada Y del centro/esquina superior izquierda  
    private _color: string; // Color de la figura

    // Constructor: inicializa posición y color
    constructor(x: number, y: number, color: string){
        this._x = x;
        this._y = y;
        this._color = color;
    }
    
    // GETTERS: permiten LEER las propiedades privadas
    public get x(): number {
        return this._x; 
    }

    public get y(): number {
        return this._y; 
    }

    public get color(): string {
        return this._color; 
    }

    // SETTERS: permiten MODIFICAR propiedades con VALIDACIÓN
    public set x(value: number){
        if(value < 0){
            throw new Error("X can't be negative"); // Validación: coordenadas positivas
        }
        this._x = value;
    }

    public set y(value: number){
        if(value < 0){
            throw new Error("Y can't be negative"); // Validación: coordenadas positivas
        }
        this._y = value;
    }

    public set color(value: string){
        if(value == " " || value.trim() === ""){
            throw new Error("Can't be empty, input a color"); // Validación: color no vacío
        }
        this._color = value;
    }

    // MOVIMIENTO ABSOLUTO: establece nueva posición directamente
    public moveTo(newX: number, newY: number): void {
        this.x = newX;  // Usa setter para aplicar validación
        this.y = newY;
    }

    // MOVIMIENTO RELATIVO: mueve desde posición actual
    public moveBy(dx: number, dy: number): void {
        this.x += dx;  // Usa setter para aplicar validación
        this.y += dy;
    }

    // MÉTODO QUE DEBE SER SOBRESCRITO por las subclases
    public calculateArea(): number {
        throw new Error("calculateArea() must be implemented in subclasses");
    }

    // MÉTODO QUE DEBE SER SOBRESCRITO por las subclases  
    public calculatePerimeterLength(): number {
        throw new Error("calculatePerimeterLength() must be implemented in subclasses");
    }
}


/* =======================================================
   CLASE CIRCLE - HEREDA de Shape y SOBRESCRIBE métodos
   ======================================================= */
class Circle extends Shape{
    private _radius: number; // Radio del círculo (propiedad ESPECÍFICA del círculo)

    constructor(x: number, y: number, color: string, radius: number){
        super(x, y, color); // LLAMA al constructor de la clase padre (Shape)
        this._radius = radius; // IMPORTANTE: en constructor usa _campo directo, no el setter
    }

    // Getter para leer el radio
    public get radius(): number{
        return this._radius;
    }

    // Setter para modificar el radio CON VALIDACIÓN
    public set radius(value: number){
        if (value <= 0){
            throw new Error("Radius must be positive"); // Validación específica del círculo
        }
        this._radius = value;
    }

    // SOBRESCRIBE el método de Shape con la fórmula del CÍRCULO: π * r²
    public override calculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }

    // SOBRESCRIBE con la fórmula del perímetro del CÍRCULO: 2 * π * r
    public override calculatePerimeterLength(): number {
        return 2 * Math.PI * this._radius;
    }
}


/* =======================================================
   CLASE RECTANGLE - HEREDA de Shape y SOBRESCRIBE métodos
   ======================================================= */
class Rectangle extends Shape {
    private _length: number; // Largo del rectángulo
    private _width: number;  // Ancho del rectángulo

    constructor(x: number, y: number, color: string, length: number, width: number){
        super(x, y, color); // Constructor padre
        this._length = length;  // IMPORTANTE: usa campo directo en constructor
        this._width = width;
    }

    // Getters para leer dimensiones
    public get length(): number{
        return this._length;
    }

    public get width(): number{
        return this._width;
    }

    // Setters con validación específica del rectángulo
    public set length(value: number){
        if (value <= 0){
            throw new Error("Length must be positive");
        }
        this._length = value;
    }

    public set width(value: number){
        if (value <= 0){
            throw new Error("Width must be positive");
        }
        this._width = value;
    }

    // SOBRESCRIBE: Área del rectángulo = largo * ancho
    public override calculateArea(): number {
        return this._length * this._width;
    }

    // SOBRESCRIBE: Perímetro del rectángulo = 2 * (largo + ancho)
    public override calculatePerimeterLength(): number {
        return 2 * (this._length + this._width);
    }
}


/* =======================================================
   PRUEBAS COMPLETAS - BLOQUES TRY-CATCH SEPARADOS
   ======================================================= */

// 1. PRUEBA Shape (solo movimiento y validación, NO calculateArea)
try {
    console.log("=== PRUEBA SHAPE (movimiento y validación) ===");
    const myShape = new Shape(10, 20, "Red");

    console.log(`Initial: (${myShape.x}, ${myShape.y}), Color: ${myShape.color}`);

    myShape.moveTo(50, 60);
    console.log(`After moveTo: (${myShape.x}, ${myShape.y})`); // Expected: (50, 60)

    myShape.moveBy(10, -5);
    console.log(`After moveBy: (${myShape.x}, ${myShape.y})`); // Expected: (60, 55)

    myShape.color = "Blue";
    console.log(`New Color: ${myShape.color}`);

    console.log("Testing error handling on Shape.x...");
    myShape.x = -10; // LANZA ERROR esperado
} catch (error) {
    if (error instanceof Error) {
        console.error("✅ Caught expected error (Shape):", error.message);
    } else {
        console.error("❌ Unknown error:", error);
    }
}

// 2. PRUEBA CIRCLE (área, perímetro y validación)
try {
    console.log("\n=== PRUEBA CIRCLE (área, perímetro, validación) ===");
    const myCircle = new Circle(0, 0, "Green", 10);

    console.log(`Circle radius: ${myCircle.radius}`);
    console.log(`Circle area: ${myCircle.calculateArea().toFixed(2)}`);     // ~314.16
    console.log(`Circle perimeter: ${myCircle.calculatePerimeterLength().toFixed(2)}`); // ~62.83

    console.log("Testing error handling on Circle.radius...");
    myCircle.radius = -5; // LANZA ERROR esperado
} catch (error) {
    if (error instanceof Error) {
        console.error("✅ Caught expected error (Circle):", error.message);
    }
}

// 3. PRUEBA RECTANGLE (área, perímetro y validación)
try {
    console.log("\n=== PRUEBA RECTANGLE (área, perímetro, validación) ===");
    const myRectangle = new Rectangle(0, 0, "Yellow", 5, 8);

    console.log(`Rectangle length: ${myRectangle.length}`);
    console.log(`Rectangle width: ${myRectangle.width}`);
    console.log(`Rectangle area: ${myRectangle.calculateArea()}`);           // 40
    console.log(`Rectangle perimeter: ${myRectangle.calculatePerimeterLength()}`); // 26

    console.log("Testing error handling on Rectangle.length...");
    myRectangle.length = 0; // LANZA ERROR esperado
} catch (error) {
    if (error instanceof Error) {
        console.error("✅ Caught expected error (Rectangle):", error.message);
    }
}
