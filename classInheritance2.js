
class Human {

    constructor(firstName, lastName, age, location) {

        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
        this.location = location;

    }

}

let gosho = new Human("Gosho", "Goshov", 27, "Pazardzhik");

console.log(gosho);
console.log();


class Alien extends Human {

    constructor(firstName, lastName, age, location, email) {
        super(firstName, lastName, age, location);

        this.email = email;
    }
}

let pesho = new Alien("Pesho", "Peshev", 28, "Pazardzhik", "pesho@abv.bg");
console.log(pesho);
console.log();


class People extends Alien {

    constructor(firstName, lastName, age, location, email, status) {
        super(firstName, lastName, age, location, email);

        this.status = status;

    }
}

let penka = new People("Penka", "Penkova", 28, "Plovdiv", "penka@abv.bg", "checked");

console.log(penka);

