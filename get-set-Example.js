
let person = {

    firstName: "Ventsislav",
    lastName: "Kostadinov",

    get fullName() {

        return this.firstName + " " + this.lastName;
    },

    set fullName(name) {

        [this.firstName, this.lastName] = name.split(" ");
    }

};

console.log(person.fullName); // Ventsislav Kostadinov

person.fullName = "John Doe";
console.log(person.fullName);

person.fullName = "Pesho Peshev";
console.log(person.fullName);
