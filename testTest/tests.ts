class Shape {
    #x: number;
    #y: number;
    #color: string;

    constructor(x: number, y: number, color: string){
        this.#x = x;
        this.#y = y;
        this.#color = color;
    }

    public get position(): {x: number, y: number} { // ???
        return {x: this.#x, y: this.#y }
    }

    public set position(value:{x: number, y: number}) { // ???
        if(value.x < 0 || value.y < 0){
            throw new Error("X or Y can't be negative"); // Validación: coordenadas positivas
        }
        this.#x = value.x;
        this.#y = value.y;
    }

    public get color(): string{
        return this.#color
    }

    public set color(value: string){
        if(value === " " || value.trim() === ""){   /// ???
            throw new Error("Color can't be empty"); // Validación: coordenadas positivas
        }
        this.#color = value;
    }

    public moveTo(newX: number, newY: number){ // ???
        this.#x = newX;
        this.#y = newY;
    }

    public moveBy(dx: number, dy: number){
        this.#x += dx;
        this.#y += dy;
    }

    calculateArea(): number{
        throw new Error("calculateArea() must be implemented in subclasses"); // ???
    }

    calculatePerimeterLength(): number{
        throw new Error("calculatePerimeterLength() must be implemented in subclasses"); /// ???
    }
}

class Circle extends Shape {
    #radius: number;

    constructor(x: number, y: number, color: string, radius: number){
        super(x, y, color);
        if (radius < 0){
            throw new Error("Radius must be positive");
        }
        this.#radius = radius;
    }

    public get radius(): number {
        return this.#radius;
    }

    public set radius(value: number){
        if(value < 0){
            throw new Error("Radius can't be negative");
        }
        this.#radius = value;
    }

    override calculateArea(): number{
        return Math.PI * this.#radius * this.#radius;
    }

    override calculatePerimeterLength(): number {
        return 2 * Math.PI * this.#radius;
    }

    public getDiameter(): number{
        return 2 * this.#radius;
    }

    public setDiameter(newDiameter: number){ // ???
        if(newDiameter < 0){
            throw new Error("Diameter cant be negative");
        }
        return this.#radius = newDiameter / 2; /// ???
    }

    public containsPoints(x: number, y: number): boolean{
        let dx = x - this.position.x;
        let dy = y - this.position.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= this.radius;
    }

    public distanceToCenter(x: number, y: number): number{
        let dx = x - this.position.x;
        let dy = y - this.position.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    public scale(factor: number){
        if(factor < 0) {
            throw new Error("Scale factor must be positive");
        }
        this.#radius = this.#radius * factor;
    }
}

class Rectangle extends Shape {
    #width: number;
    #height: number;

    constructor(x: number, y: number, color: string, width: number, heigth: number){
        super(x, y, color);
        if(width < 0 || heigth < 0){
            throw new Error("Width and Height can't be negative"); // Validación: coordenadas positivas
        }
        this.#width = width;
        this.#height = heigth;
    }

    public get widthAndHeight(): {width: number, heigth: number} { 
        return {width: this.#width, heigth: this.#height }
    }

    public set widthAndHeight(value:{width: number, height: number}) { 
        if(value.width < 0 || value.height < 0){
            throw new Error("width or height can't be negative"); 
        }
        this.#width = value.width;
        this.#height = value.height;
    }

    override calculateArea(): number {
        return this.#height * this.#width;
    }

    override calculatePerimeterLength(): number {
        return 2 * (this.#height + this.#width)
    }

    public isSquare(): boolean {
        return this.#height === this.#width
    }

    public getCorners(){ /// ???
        return [
            {x: this.position.x, y: this.position.y},
            {x: this.position.x + this.#width, y: this.position.y},
            {x: this.position.x, y: this.position.y + this.#height},
            {x: this.position.x + this.#width, y: this.position.y + this.#height}
        ]
    }

    public containsPoints(x: number, y: number): boolean{   /// ???
        let left = this.position.x;
        let right = this.position.x + this.#width;
        let top = this.position.y;
        let bottom = this.position.y + this.#height;

        if (x < left) return false;
        if (x > right) return false;
        if (y < top) return false;
        if (y > bottom) return false;
        return true;        
    }

    public scale(factor: number){
        if(factor < 0) {
            throw new Error("Scale factor must be positive");
        }
        this.#width = this.#width * factor;
        this.#height = this.#height * factor;
    }

}