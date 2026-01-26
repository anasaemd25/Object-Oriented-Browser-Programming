// ==========================================
// POO AVANZADA EN TYPESCRIPT (GEOMETRÍA)
// ==========================================

// CLASE BASE: Shape (Forma)
// Contiene la lógica común para todas las formas geométricas (posición x, y, color).
class Shape {
    // PROPIEDADES PRIVADAS (private)
    // Solo accesibles dentro de esta clase. A diferencia de '#', 'private' es una restricción de TypeScript (en compilación).
    private _x: number;
    private _y: number;
    private _color: string;

    constructor(x: number, y: number, color: string) {
        this._x = x;
        this._y = y;
        this._color = color;
    }

    // --- GETTERS PÚBLICOS ---
    // Exponemos las propiedades privadas de forma controlada (solo lectura).
    public get x(): number { return this._x; }
    public get y(): number { return this._y; }
    public get color(): string { return this._color; }

    // --- SETTERS PÚBLICOS (con Validación) ---
    // Controlamos cómo se modifican los valores.

    public set x(value: number) {
        if (value < 0) {
            throw new Error("X cant be negative"); // Validación: No coordenadas negativas.
        }
        this._x = value;
    }

    public set y(value: number) {
        if (value < 0) {
            throw new Error("Y cant be negative");
        }
        this._y = value;
    }

    public set color(value: string) {
        if (value == " " || value.trim() == "") {
            throw new Error("Color can't be empty");
        }
        this._color = value;
    }

    // Mover a una posición absoluta.
    public moveTo(newX: number, newY: number) {
        this.x = newX; // Usamos el setter para aprovechar la validación.
        this.y = newY;
    }

    // Mover relativamente (desplazar).
    public moveBy(dx: number, dy: number) {
        this.x += dx;
        this.y += dy;
    }

    // MÉTODOS "ABSTRACTOS" (Simulados)
    // Estas funciones DEBEN ser implementadas por las subclases (Circle, Rectangle).
    // Si la subclase no lo hace y se llama a esto, lanzará error.
    public calculateArea(): number {
        throw new Error("calculateArea() must be implemented in subclasses");
    }

    public calculatePerimeterLength(): number {
        throw new Error("calculateArea() must be implemented in subclasses");
    }
}

// --- SUBCLASE: CÍRCULO ---
class Circle extends Shape {
    private _radius: number;

    constructor(x: number, y: number, color: string, radius: number) {
        super(x, y, color); // Llamada obligatoria al constructor del padre.
        if (radius < 0) {
            throw new Error("Radius must be positive");
        }
        this._radius = radius;
    }

    public get radius(): number { return this._radius; }

    public set radius(value: number) {
        if (value <= 0) throw new Error("Radius must be positive");
        this._radius = value;
    }

    // SOBRESCRITURA (Override)
    // Implementación específica de la fórmula del área para Círculos.
    public override calculateArea(): number {
        return Math.PI * this._radius * this._radius; // π * r²
    }

    public override calculatePerimeterLength(): number {
        return 2 * Math.PI * this._radius; // 2 * π * r
    }

    public getDiameter(): number { return this.radius * 2; }

    public setDiameter(diameter: number): void {
        this.radius = diameter / 2;
    }

    // Verifica si un punto (x,y) está dentro del círculo usando Pitágoras.
    public containsPoint(x: number, y: number): boolean {
        const dx = x - this.x;
        const dy = y - this.y;
        const distancia = Math.sqrt(dx * dx + dy * dy); // Hipotenusa
        return distancia <= this.radius;
    }

    public distanceToCenter(x: number, y: number): number {
        let dx = x - this.x;
        let dy = y - this.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public scale(factor: number): void {
        this.radius = this.radius * factor;
    }
}

// --- SUBCLASE: RECTÁNGULO ---
class Rectangle extends Shape {
    private _width: number;
    private _length: number;

    constructor(x: number, y: number, color: string, width: number, length: number) {
        super(x, y, color);
        if (width <= 0) throw new Error("Width must be positive");
        if (length <= 0) throw new Error("Length must be positive");
        this._width = width;
        this._length = length;
    }

    public override calculateArea(): number {
        return this._width * this._length // b * h
    }

    public override calculatePerimeterLength(): number {
        return 2 * (this._width + this._length);
    }

    public isSquare(): boolean {
        return this._width === this._length;
    }

    // Devuelve un array con las coordenadas de las 4 esquinas.
    public getCorners(): { x: number, y: number }[] {
        return [
            { x: this.x, y: this.y }, // esquina superior izquierda
            { x: this.x + this._width, y: this.y }, // superior derecha
            { x: this.x, y: this.y + this._length }, // inferior izquierda
            { x: this.x + this._width, y: this.y + this._length } // inferior derecha
        ];
    }

    // Verifica si un punto está dentro (bounding box).
    public containsPoint(px: number, py: number): boolean {
        return px >= this.x && px <= this.x + this._width &&
            py >= this.y && py <= this.y + this._length;
    }

    public scale(factor: number): void {
        this._width = this._width * factor;
        this._length = this._length * factor;
    }
}

// --- PRUEBAS Y EJECUCIÓN ---

const miCirculo = new Circle(10, 20, "Red", 5);
console.log("Centro:", miCirculo.x, miCirculo.y);
console.log("Área del círculo:", miCirculo.calculateArea());

const miRectangulo = new Rectangle(5, 10, "Blue", 20, 15);
console.log("Área del rectángulo:", miRectangulo.calculateArea());
console.log("¿Es cuadrado?", miRectangulo.isSquare());
console.log("Esquinas:", miRectangulo.getCorners());
