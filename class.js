

class Human {
    constructor(name) {
        this.name = name;
    }

    toString() {
        console.log( "Hello, my name is " + this.name + "." );

    }

}

let me = new Human("Venk");

me.toString();