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
class Student {
    fullName: string;
    constructor(public firstName: string, public middleInitial: string, public lastName: string) {
        this.fullName = firstName + " " + middleInitial + " " + lastName
    }
}

interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hey there, " + person.firstName + " " + person.lastName
}

let user = new Student("Super", "F.", "Dave")

document.body.textContent = greeter(user)