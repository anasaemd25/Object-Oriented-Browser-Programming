class Shape {
    // Private fields (prefixed with #). These cannot be accessed directly from outside the class.
    #x: number;
    #y: number;
    #color: string;

    constructor(x: number, y: number, color: string) {
        this.#x = x;
        this.#y = y;
        this.#color = color;
    }

    // Getter: Returns the current position as an object {x, y}
    public get position(): { x: number, y: number } {
        return { x: this.#x, y: this.#y }
    }

    // Setter: Sets the position, validating that both coordinates are non-negative
    public set position(value: { x: number, y: number }) {
        if (value.x < 0 || value.y < 0) {
            throw new Error("X or Y can't be negative"); // Validation: coordinates must be positive
        }
        this.#x = value.x;
        this.#y = value.y;
    }

    // Getter: Returns the color of the shape
    public get color(): string {
        return this.#color
    }

    // Setter: Sets the color, validating that it is not empty or just whitespace
    public set color(value: string) {
        if (value === " " || value.trim() === "") {
            throw new Error("Color can't be empty"); // Validation: color must not be empty
        }
        this.#color = value;
    }

    // Moves the shape to an absolute position (newX, newY)
    public moveTo(newX: number, newY: number) {
        this.#x = newX;
        this.#y = newY;
    }

    // Moves the shape by a relative offset (dx, dy)
    public moveBy(dx: number, dy: number) {
        this.#x += dx;
        this.#y += dy;
    }

    // Abstract method: must be implemented by subclasses to calculate area
    calculateArea(): number {
        throw new Error("calculateArea() must be implemented in subclasses");
    }

    // Abstract method: must be implemented by subclasses to calculate perimeter
    calculatePerimeterLength(): number {
        throw new Error("calculatePerimeterLength() must be implemented in subclasses");
    }
}

class Circle extends Shape {
    #radius: number; // Private field for radius

    constructor(x: number, y: number, color: string, radius: number) {
        super(x, y, color); // Call parent constructor
        if (radius < 0) {
            throw new Error("Radius must be positive");
        }
        this.#radius = radius;
    }

    // Returns the radius of the circle
    public get radius(): number {
        return this.#radius;
    }

    // Sets the radius, validating that it is non-negative
    public set radius(value: number) {
        if (value < 0) {
            throw new Error("Radius can't be negative");
        }
        this.#radius = value;
    }

    // Calculates the area of the circle using πr²
    override calculateArea(): number {
        return Math.PI * this.#radius * this.#radius;
    }

    // Calculates the perimeter (circumference) of the circle using 2πr
    override calculatePerimeterLength(): number {
        return 2 * Math.PI * this.#radius;
    }

    // Returns the diameter (2 * radius)
    public getDiameter(): number {
        return 2 * this.#radius;
    }

    // Sets the diameter, updating the radius accordingly
    public setDiameter(newDiameter: number) {
        if (newDiameter < 0) {
            throw new Error("Diameter cant be negative");
        }
        // The radius is half the diameter
        return this.#radius = newDiameter / 2;
    }

    // Checks if a point (x, y) is inside or on the border of the circle
    public containsPoints(x: number, y: number): boolean {
        let dx = x - this.position.x;
        let dy = y - this.position.y;
        // Distance formula: sqrt(dx^2 + dy^2)
        let distance = Math.sqrt(dx * dx + dy * dy);
        return distance <= this.radius;
    }

    // Returns the distance from the center of the circle to a point (x, y)
    public distanceToCenter(x: number, y: number): number {
        let dx = x - this.position.x;
        let dy = y - this.position.y;
        return Math.sqrt(dx * dx + dy * dy);
    }

    // Scales the circle by multiplying the radius by the given factor
    public scale(factor: number) {
        if (factor < 0) {
            throw new Error("Scale factor must be positive");
        }
        this.#radius = this.#radius * factor;
    }
}

class Rectangle extends Shape {
    #width: number;
    #height: number;

    constructor(x: number, y: number, color: string, width: number, heigth: number) {
        super(x, y, color);
        if (width < 0 || heigth < 0) {
            throw new Error("Width and Height can't be negative"); // Validation: dimensions must be positive
        }
        this.#width = width;
        this.#height = heigth;
    }

    // Returns the width and height as an object
    public get widthAndHeight(): { width: number, heigth: number } {
        return { width: this.#width, heigth: this.#height }
    }

    // Sets the width and height, validating that both are non-negative
    public set widthAndHeight(value: { width: number, height: number }) {
        if (value.width < 0 || value.height < 0) {
            throw new Error("width or height can't be negative");
        }
        this.#width = value.width;
        this.#height = value.height;
    }

    // Calculates the area of the rectangle (width * height)
    override calculateArea(): number {
        return this.#height * this.#width;
    }

    // Calculates the perimeter of the rectangle (2 * (width + height))
    override calculatePerimeterLength(): number {
        return 2 * (this.#height + this.#width)
    }

    // Returns true if the rectangle is a square (width equals height)
    public isSquare(): boolean {
        return this.#height === this.#width
    }

    // Returns an array with the coordinates of the four corners of the rectangle
    // Assuming (x, y) is the top-left corner:
    // [top-left, top-right, bottom-left, bottom-right]
    public getCorners() {
        return [
            { x: this.position.x, y: this.position.y }, // top-left
            { x: this.position.x + this.#width, y: this.position.y }, // top-right
            { x: this.position.x, y: this.position.y + this.#height }, // bottom-left
            { x: this.position.x + this.#width, y: this.position.y + this.#height } // bottom-right
        ]
    }

    // Checks if a point (x, y) is inside or on the border of the rectangle
    public containsPoints(x: number, y: number): boolean {
        let left = this.position.x;
        let right = this.position.x + this.#width;
        let top = this.position.y;
        let bottom = this.position.y + this.#height;

        // The point must be within the rectangle's bounds
        if (x < left) return false;
        if (x > right) return false;
        if (y < top) return false;
        if (y > bottom) return false;
        return true;
    }

    // Scales the rectangle by multiplying both width and height by the given factor
    public scale(factor: number) {
        if (factor < 0) {
            throw new Error("Scale factor must be positive");
        }
        this.#width = this.#width * factor;
        this.#height = this.#height * factor;
    }

}