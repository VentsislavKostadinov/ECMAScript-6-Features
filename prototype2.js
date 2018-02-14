
function Employee(name) {

    this.name = name;

    Employee.prototype.getName = function () {

        return this.name;
    }
}


let emp1 = new Employee("Mark");
console.log("emp1 = " + emp1.getName());
let emp2 = new Employee("Sara");
console.log("emp2 = " + emp2.getName());
