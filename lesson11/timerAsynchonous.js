var Person = /** @class */ (function () {
    function Person() {
        var _this = this;
        this.age = 0;
        setInterval(function () {
            _this.age++;
            console.log("AGE IS: " + _this.age);
        }, 1000);
    }
    Person.prototype.printAge = function () {
        console.log("AGE IS: " + this.age);
    };
    return Person;
}());
var p = new Person();
p.printAge();
