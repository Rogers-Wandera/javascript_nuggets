let people = ["Rogers","Cathy"]
let others = ["William", "Ronald"]

let newPeople = [...people,...others]

let room = "Suit";

let newRoom = [...room]
console.log(newPeople)
console.log(newRoom)

const Person = {name:"Cathy", age:21}

const newPerson = {...Person,name:"Rogers", age:34, course: "BIT"}

console.log(Person)
console.log(newPerson)