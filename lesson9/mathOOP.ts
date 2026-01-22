/*
Exercise 1: Core Shape Properties
Create a Shape base class with:
· Private x, y coordinates (center point for circle, decide center or top-left for rectangle, or you decide for triangle)
· Private color property
· Public getters/setters for position and color
· Public method moveTo(newX, newY) - absolute positioning
· Public method moveBy(dx, dy) - relative movement
· Methods calculateArea() and calculatePerimeterLength() that must be overridden
*/

class Shape {
    // Propiedades privadas se creean con "private" al principio (_ al principo por convención para indicar que son privadas)
    private _x: number; // or #x
    private _y: number; // or #y
    private _color: string; // or #color

    // Constructor para inicializar la posición y color
    constructor(x: number, y: number, color: string){
        this._x = x;
        this._y = y;
        this._color = color;
    }
    
    // Getters
    public get x(): number {
        return this._x; 
    }

    public get y(): number {
        return this._y; 
    }

    public get color(): string {
        return this._color; 
    }

    // Setters
    public set x(value: number){
        if(value < 0){
            throw new Error("X can't be negative");
        }
        this._x = value;
    }

    public set y(value: number){
        if(value < 0){
            throw new Error("Y can't be negative");
        }
        this._y = value;
    }

    public set color(value: string){
        if(value == " "){
            throw new Error("Can't be empty, input a color");
        }
        this._color = value;
    }

    public moveTo(newX: number, newY: number): void {
        this.x = newX;  // Usamos el setter para establecer la nueva posición de X
        this.y = newY;  // Usamos el setter para establecer la nueva posición de Y
    }

        public moveBy(dx: number, dy: number): void {
        this.x += dx;  // Usamos el setter para establecer la nueva posición de X
        this.y += dy;  // Usamos el setter para establecer la nueva posición de Y
    }
}