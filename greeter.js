// Here we use an interface that describes objects that have a firstName and lastName field.  In TS ,two types are compatible if their internal structure is compatible.  This allows us to implement an interface just by having the shape the interface requires, without an explicit implements clause.
// interface Person {
//     firstName: string;
//     lastName: string;
// }
// function greeter(person: Person) {
//     return "Hello " + person.firstName + " " + person.lastName
// }
// let user = { firstName: "Super", lastName: "Dave" }
// document.body.textContent = greeter(user)
// Now let's extend the example with classes:
var Student = /** @class */ (function () {
    function Student(firstName, middleInitial, lastName) {
        this.firstName = firstName;
        this.middleInitial = middleInitial;
        this.lastName = lastName;
        this.fullName = firstName + " " + middleInitial + " " + lastName;
    }
    return Student;
}());
function greeter(person) {
    return "Hey there, " + person.firstName + " " + person.lastName;
}
var user = new Student("Super", "F.", "Dave");
document.body.textContent = greeter(user);
