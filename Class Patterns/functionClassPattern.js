function User(name) {
    this.sayHi = function() {
        console.log(name);
    };
}

let user = new User("John");
user.sayHi(); // John
