
class Circle {

    constructor(radius) {
        this.radius = radius;
    }

    get diameter() {

        return 2*this.radius;
    }

    set diameter(diameter) {

        this.radius = diameter / 2;
    }
}


let c = new Circle(5);
console.log(c.diameter);

c.diameter = 30;
console.log(c.diameter);
