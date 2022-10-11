const people = [
    {fullname: "Rogers", age: 30, position: "developer"},
    {fullname: "Cathy", age: 20, position: "human resource"},
    {fullname: "Bob", age: 40, position: "Manager"},
    {fullname: "Ronald", age: 35, position: "C.E.O"},
]

const fruits = ["Orange", "Mango"]

// FILTER
const youngPeople = people.filter((person) => {
    if(person.age <= 30) {
        return person
    }
})
console.log(youngPeople)

const CEO = people.map((person) =>(person.position == "C.E.O") ? person : "no match")
console.log(CEO)

// Find
const rogers = people.find((person) => person.fullname === "Rogers");
console.log(rogers)

const mango = fruits.find((fruit) => fruit === "Mango")
console.log(mango)