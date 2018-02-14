
class Person {

    constructor(firstName, lastName, age) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    toString() {

        console.log(this.firstName + " " + this.lastName + " " + this.age);
    }

    static countUsers() {

        console.log("There are 10 people here");
    }
}

let bob = new Person("Venk", "Kostadinov", 27);
console.log(bob);

Person.countUsers();