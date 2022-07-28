var Circle = /** @class */ (function () {
    function Circle(radius) {
        this.radius = radius;
    }
    Circle.prototype.getArea = function () {
        return this.radius * this.radius * Math.PI;
    };
    return Circle;
})();
var Rectangle = /** @class */ (function () {
    //width: number;
    //height: number;
    function Rectangle(width, height) {
        this.width = width;
        this.height = height;
        this.width = width;
        this.height = height;
    }
    Rectangle.prototype.getArea = function () {
        return this.width * this.height;
    };
    return Rectangle;
})();
var shapes = [new Circle(5), new Rectangle(3, 4)];
shapes.forEach(function (shape) {
    console.log(shape.getArea());
});
