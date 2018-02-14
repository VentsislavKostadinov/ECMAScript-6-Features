
function Person(firstName, lastName, age) {

    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;

}

Person.prototype.area = function () {

    return this.firstName + this.lastName + this.age;
};

let output = new Person("Venk", "K", 27);
console.log(output);