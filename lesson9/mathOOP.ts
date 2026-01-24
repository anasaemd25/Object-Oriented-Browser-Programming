class Shape {
    private _x: number;
    private _y: number;
    private _color: string;

    constructor(x: number, y: number, color: string){
        this._x = x;
        this._y = y;
        this._color = color;
    }

    public get x(): number{
        return this._x;
    }

    public get y(): number{
        return this._y;
    }

    public get color(): string{
        return this._color;
    }

    public set x(value: number){
        if (value < 0){
            throw new Error ("X cant be negative");
        }
        this._x = value;
    }

    public set y(value: number){
        if (value < 0){
            throw new Error ("Y cant be negative");
        }
        this._y = value;
    }
    
    public set color(value: string){
        if (value == " " || value.trim() == ""){
            throw new Error ("Color can't be empty");
        }
        this._color = value;
    }

    public moveTo(newX: number, newY: number){
        this.x = newX;
        this.y = newY;
    }

    public moveBy(dx: number, dy: number){
        this.x += dx;
        this.y += dy;
    }

    public calculateArea(): number {
        throw new Error("calculateArea() must be implemented in subclasses");

    }

    public calculatePerimeterLength(): number{
        throw new Error("calculateArea() must be implemented in subclasses");
    }
}

class Circle extends Shape {
    private _radius: number;

    constructor(x: number, y: number, color: string, radius: number){
        super(x, y, color);
        if (radius < 0){
            throw new Error("Radius must be positive");
        }
        this._radius = radius;
    }

    public get radius(): number {
        return this._radius;
    }

    public set radius(value: number){
        if (value <= 0){
            throw new Error ("Radius must be positive");
        }
        this._radius = value;
    }

    public override calculateArea(): number {
        return Math.PI * this._radius * this._radius;
    }

    public override calculatePerimeterLength(): number {
        return 2 * Math.PI * this._radius;
    }

    public getDiameter(): number {
        return this.radius * 2;
    }

    public setDiameter(diameter: number): void{
        this.radius = diameter / 2;
    }

    public containsPoint(x: number, y: number): boolean {
        const dx = x - this.x;
        const dy = y - this.y;
        const distancia = Math.sqrt(dx*dx + dy*dy);
        return distancia <= this.radius;
    }

    public distanceToCenter(x: number, y: number): number{
        let dx = x - this.x;
        let dy = y - this.y;
        return Math.sqrt(dx*dx + dy*dy);
    }

    public scale(factor: number): void {
        this.radius = this.radius * factor;
    }
}

class Rectangle extends Shape{
    private _width: number;
    private _length: number;

    constructor(x: number, y: number, color: string, width: number, length: number){
        super(x, y, color);
        if (width <= 0){
            throw new Error("Width must be positive");
        }
        if (length <= 0){
            throw new Error("Length must be positive")
        }
        this._width = width;
        this._length = length;
    }
    
    public override calculateArea(): number {
        return this._width * this._length
    }

    public override calculatePerimeterLength(): number {
        return 2 * (this._width + this._length);    
    }

    public isSquare(): boolean{
        if (this._width === this._length) {
            return true;
        } else {
            return false;
        }
    }

    public getCorners(): {x: number, y: number}[] {
        return [
            { x: this.x, y: this.y }, // esquina superior izquierda
            { x: this.x + this._width, y: this.y }, // esquina superior derecha
            { x: this.x, y: this.y + this._length }, // esquina inferior izquierda
            { x: this.x + this._width, y: this.y + this._length } // esquina inferior derecha
        ];
    }

    public containsPoint(px: number, py: number): boolean {
        return px >= this.x && px <= this.x + this._width &&
            py >= this.y && py <= this.y + this._length;
    }

    public scale(factor: number): void {
        this._width = this._width * factor;
        this._length = this._length * factor;
    }

    // Consider: should x,y be top-left corner, center, or something else?
    // Top-left
}

// --- PRUEBAS ---
const miCirculo = new Circle(10, 20, "Red", 5);
console.log("Centro:", miCirculo.x, miCirculo.y);
console.log("Radio:", miCirculo.radius);
console.log("Área:", miCirculo.calculateArea());
console.log("Perímetro:", miCirculo.calculatePerimeterLength());
console.log("Diámetro:", miCirculo.getDiameter());
miCirculo.setDiameter(20);
console.log("Nuevo radio después de setDiameter(20):", miCirculo.radius);
console.log("Distancia al punto (13,24):", miCirculo.distanceToCenter(13, 24));
miCirculo.scale(3);
console.log("Scale factor:", miCirculo.radius); // 15 ✅
console.log("Radio del círculo:", miCirculo.radius);
console.log("¿Está el punto (12,22) dentro?", miCirculo.containsPoint(12, 22)); // true
console.log("¿Está el punto (20,30) dentro?", miCirculo.containsPoint(100, 300)); // false
