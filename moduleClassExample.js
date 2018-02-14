

class Person {

    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;

        function toString() {

            console.log(this.firstName + this.lastName + this.age);
        }
    }
}

let bobi = new Person("Pesho", "Peshev", 27);
console.log(bobi);

module.exports = Person;