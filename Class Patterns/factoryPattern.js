function User(name, birthday) {
    // only visible from other methods inside User
    function calcAge() {
        return new Date().getFullYear() - birthday.getFullYear();
    }

    return {
        sayHi() {
           console.log(name + ', age: ' + calcAge());
        }
    };
}

let user = User("John", new Date(2000,0,1));
    user.sayHi(); // John
