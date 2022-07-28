interface Shape {
    getArea(): number;
}

class Circle implements Shape {
    radius: number;
    constructor(radius: number) {
        this.radius = radius;
    }
    getArea(): number {
        return this.radius * this.radius * Math.PI;
    }
}

class Rectangle implements Shape {
    //width: number;
    //height: number;
    constructor(private width: number, private height: number) {
        this.width = width;
        this.height = height;
    }
    getArea(): number {
        return this.width * this.height;
    }
}

const shapes: Shape[] = [new Circle(5), new Rectangle(3, 4)];
shapes.forEach((shape) => {
    console.log(shape.getArea());
});
