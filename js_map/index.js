const people = [
    {
        name: "Bob",
        age: 20,
        position: "Software developer"
    },
    {
        name: "Rogers",
        age: 21,
        position: "Software Engineer"
    },
    {
        name: "Anna",
        age: 24,
        position: "Designer"
    },
    {
        name: "Jane",
        age: 22,
        position: "Secretary"
    }
]

const ages = people.map((person) => person.age);
console.log(ages)

const newPeople = people.map((person) => {
    return {
        firstName: person.name.toUpperCase(),
        personAge: person.age + 10
    }
})

let display = document.getElementById("display");
function renderPeople() {
    console.log(display);
    let div = document.createElement("div");
    div.innerHTML = newPeople.map((person) => {
        return (
            `<div>
                <p>${person.firstName}</p>
                <p>${person.personAge}</p>
            </div>`
        )
    }).join("")
    return display.appendChild(div)
}
renderPeople()