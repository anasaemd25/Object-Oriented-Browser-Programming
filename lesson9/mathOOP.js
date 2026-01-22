/*
Exercise 1: Core Shape Properties - CLASE BASE Y SUBCLASES
Requisitos:
· Propiedades privadas x, y (coordenadas del centro para círculo, esquina superior izquierda para rectángulo)
· Propiedad privada color
· Getters/setters públicos para posición y color
· Métodos moveTo() y moveBy() para movimiento
· calculateArea() y calculatePerimeterLength() que deben ser sobrescritos
*/
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Shape = /** @class */ (function () {
    // Constructor: inicializa posición y color
    function Shape(x, y, color) {
        this._x = x;
        this._y = y;
        this._color = color;
    }
    Object.defineProperty(Shape.prototype, "x", {
        // GETTERS: permiten LEER las propiedades privadas
        get: function () {
            return this._x;
        },
        // SETTERS: permiten MODIFICAR propiedades con VALIDACIÓN
        set: function (value) {
            if (value < 0) {
                throw new Error("X can't be negative"); // Validación: coordenadas positivas
            }
            this._x = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "y", {
        get: function () {
            return this._y;
        },
        set: function (value) {
            if (value < 0) {
                throw new Error("Y can't be negative"); // Validación: coordenadas positivas
            }
            this._y = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Shape.prototype, "color", {
        get: function () {
            return this._color;
        },
        set: function (value) {
            if (value == " " || value.trim() === "") {
                throw new Error("Can't be empty, input a color"); // Validación: color no vacío
            }
            this._color = value;
        },
        enumerable: false,
        configurable: true
    });
    // MOVIMIENTO ABSOLUTO: establece nueva posición directamente
    Shape.prototype.moveTo = function (newX, newY) {
        this.x = newX; // Usa setter para aplicar validación
        this.y = newY;
    };
    // MOVIMIENTO RELATIVO: mueve desde posición actual
    Shape.prototype.moveBy = function (dx, dy) {
        this.x += dx; // Usa setter para aplicar validación
        this.y += dy;
    };
    // MÉTODO QUE DEBE SER SOBRESCRITO por las subclases
    Shape.prototype.calculateArea = function () {
        throw new Error("calculateArea() must be implemented in subclasses");
    };
    // MÉTODO QUE DEBE SER SOBRESCRITO por las subclases  
    Shape.prototype.calculatePerimeterLength = function () {
        throw new Error("calculatePerimeterLength() must be implemented in subclasses");
    };
    return Shape;
}());
/* =======================================================
   CLASE CIRCLE - HEREDA de Shape y SOBRESCRIBE métodos
   ======================================================= */
var Circle = /** @class */ (function (_super) {
    __extends(Circle, _super);
    function Circle(x, y, color, radius) {
        var _this = _super.call(this, x, y, color) || this; // LLAMA al constructor de la clase padre (Shape)
        _this._radius = radius; // IMPORTANTE: en constructor usa _campo directo, no el setter
        return _this;
    }
    Object.defineProperty(Circle.prototype, "radius", {
        // Getter para leer el radio
        get: function () {
            return this._radius;
        },
        // Setter para modificar el radio CON VALIDACIÓN
        set: function (value) {
            if (value <= 0) {
                throw new Error("Radius must be positive"); // Validación específica del círculo
            }
            this._radius = value;
        },
        enumerable: false,
        configurable: true
    });
    // SOBRESCRIBE el método de Shape con la fórmula del CÍRCULO: π * r²
    Circle.prototype.calculateArea = function () {
        return Math.PI * this._radius * this._radius;
    };
    // SOBRESCRIBE con la fórmula del perímetro del CÍRCULO: 2 * π * r
    Circle.prototype.calculatePerimeterLength = function () {
        return 2 * Math.PI * this._radius;
    };
    return Circle;
}(Shape));
/* =======================================================
   CLASE RECTANGLE - HEREDA de Shape y SOBRESCRIBE métodos
   ======================================================= */
var Rectangle = /** @class */ (function (_super) {
    __extends(Rectangle, _super);
    function Rectangle(x, y, color, length, width) {
        var _this = _super.call(this, x, y, color) || this; // Constructor padre
        _this._length = length; // IMPORTANTE: usa campo directo en constructor
        _this._width = width;
        return _this;
    }
    Object.defineProperty(Rectangle.prototype, "length", {
        // Getters para leer dimensiones
        get: function () {
            return this._length;
        },
        // Setters con validación específica del rectángulo
        set: function (value) {
            if (value <= 0) {
                throw new Error("Length must be positive");
            }
            this._length = value;
        },
        enumerable: false,
        configurable: true
    });
    Object.defineProperty(Rectangle.prototype, "width", {
        get: function () {
            return this._width;
        },
        set: function (value) {
            if (value <= 0) {
                throw new Error("Width must be positive");
            }
            this._width = value;
        },
        enumerable: false,
        configurable: true
    });
    // SOBRESCRIBE: Área del rectángulo = largo * ancho
    Rectangle.prototype.calculateArea = function () {
        return this._length * this._width;
    };
    // SOBRESCRIBE: Perímetro del rectángulo = 2 * (largo + ancho)
    Rectangle.prototype.calculatePerimeterLength = function () {
        return 2 * (this._length + this._width);
    };
    return Rectangle;
}(Shape));
/* =======================================================
   PRUEBAS COMPLETAS - BLOQUES TRY-CATCH SEPARADOS
   ======================================================= */
// 1. PRUEBA Shape (solo movimiento y validación, NO calculateArea)
try {
    console.log("=== PRUEBA SHAPE (movimiento y validación) ===");
    var myShape = new Shape(10, 20, "Red");
    console.log("Initial: (".concat(myShape.x, ", ").concat(myShape.y, "), Color: ").concat(myShape.color));
    myShape.moveTo(50, 60);
    console.log("After moveTo: (".concat(myShape.x, ", ").concat(myShape.y, ")")); // Expected: (50, 60)
    myShape.moveBy(10, -5);
    console.log("After moveBy: (".concat(myShape.x, ", ").concat(myShape.y, ")")); // Expected: (60, 55)
    myShape.color = "Blue";
    console.log("New Color: ".concat(myShape.color));
    console.log("Testing error handling on Shape.x...");
    myShape.x = -10; // LANZA ERROR esperado
}
catch (error) {
    if (error instanceof Error) {
        console.error("✅ Caught expected error (Shape):", error.message);
    }
    else {
        console.error("❌ Unknown error:", error);
    }
}
// 2. PRUEBA CIRCLE (área, perímetro y validación)
try {
    console.log("\n=== PRUEBA CIRCLE (área, perímetro, validación) ===");
    var myCircle = new Circle(0, 0, "Green", 10);
    console.log("Circle radius: ".concat(myCircle.radius));
    console.log("Circle area: ".concat(myCircle.calculateArea().toFixed(2))); // ~314.16
    console.log("Circle perimeter: ".concat(myCircle.calculatePerimeterLength().toFixed(2))); // ~62.83
    console.log("Testing error handling on Circle.radius...");
    myCircle.radius = -5; // LANZA ERROR esperado
}
catch (error) {
    if (error instanceof Error) {
        console.error("✅ Caught expected error (Circle):", error.message);
    }
}
// 3. PRUEBA RECTANGLE (área, perímetro y validación)
try {
    console.log("\n=== PRUEBA RECTANGLE (área, perímetro, validación) ===");
    var myRectangle = new Rectangle(0, 0, "Yellow", 5, 8);
    console.log("Rectangle length: ".concat(myRectangle.length));
    console.log("Rectangle width: ".concat(myRectangle.width));
    console.log("Rectangle area: ".concat(myRectangle.calculateArea())); // 40
    console.log("Rectangle perimeter: ".concat(myRectangle.calculatePerimeterLength())); // 26
    console.log("Testing error handling on Rectangle.length...");
    myRectangle.length = 0; // LANZA ERROR esperado
}
catch (error) {
    if (error instanceof Error) {
        console.error("✅ Caught expected error (Rectangle):", error.message);
    }
}
