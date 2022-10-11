const people = [
    {
        name: "bob",
        location: {street: "123 main street", timeZone: {offset: '+7:00'}}
    },
    {
        name: "Rogers",
        location: {street: "112 main street",}
    },
    {
        name: "Cathy",
        location: {street: "123 Apple street", timeZone: {offset: '+9:00'}}
    }
]

const findTimeZone = people.forEach((person) => {
    // console.log(person.location && person.location.timeZone && person.location.timeZone.offset)

    let time = person?.location?.timeZone?.offset || "Not selected"
    console.log(time)
})

console.log(findTimeZone)