

class Human {

    constructor(username, password, email) {

        this.username = username;
        this.password = password;
        this.email = email;
    }

    register() {
        console.log(this.username + " " + this.password + " " + this.email + " is registered ");
    }

   static countUsers() {

        console.log("There are 50 users");
    }
}

let bob = new Human("bob", "123456", "bob@abv.bg");

// console.log(bob);   return like an object

bob.register();

//Human.countUsers();

console.log();

class Member extends Human {
    constructor(username, password, email, number) {
        super(username, password, email);

        this.number = number;
    }

    getNumber() {

        console.log(this.username + " " + this.password + " " + this.email + " " + this.number);
    }
}

let gosho = new Member("Gosho" , "456789" , "gosho@abv,bg", 5);

gosho.getNumber();

