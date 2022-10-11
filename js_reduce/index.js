const people = [
    {
        name: "Bob",
        age: 20,
        position: "Software developer",
        salary: 6000
    },
    {
        name: "Rogers",
        age: 21,
        position: "Software Engineer",
        salary: 5000
    },
    {
        name: "Anna",
        age: 24,
        position: "Designer",
        salary: 4000
    },
    {
        name: "Jane",
        age: 22,
        position: "Secretary",
        salary: 2000
    }
]

const totalSalary = people.reduce((total, person) => {
    total = total + person.salary
    return total
},0)

console.log(totalSalary)

const array = [
    {
        Name: "Mbajje",
        age: 21,
        results:[ {subject: "Math", marks: 60},{subject: "English", marks: 40} ]
    },
    {
        Name: "Cathy",
        age: 20,
        results:[ {subject: "Math", marks: 70},{subject: "English", marks: 30} ]
    },
    {
        Name: "Rogers",
        age: 26,
        results:[ {subject: "Math", marks: 70},{subject: "English", marks: 70} ]
    }
]