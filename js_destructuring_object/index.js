const person = {
    firstName: "Rogers",
    lastName: "Wandera",
    city: "kampala",
    country: "Uganda",
    siblings: {
        brothers: {first: "Ronald", second: "Ryan"},
        sisters: {first: "Scovia"}
    }
}

// oldway
// console.log(person.firstName)
// console.log(person.siblings.brothers.fist)
// console.log(person.siblings.brothers.second)

const {firstName,lastName,city,country, siblings:{brothers:{first,second}}} = person;

// console.log(first)
// console.log(second)

const getPerson = ({siblings:{brothers:{first,second}}}) => {
    return `${first} ${second}`
}

console.log(getPerson(person))