const fruits = ["lemon", "apple", "mango","grapes","orange"]

const [lemon,second,...restOfTheFruits] = fruits

console.log(lemon,second, restOfTheFruits)
let specificFruit = restOfTheFruits.find((fruit) => fruit === "mango")

console.log(specificFruit)

const Person = {firstName: "Rogers", lastName: "Wandera", age: 40, job: "Developer"}

const  {job, ...restPerson} = Person
console.log(job, restPerson)

const Average = (job, ...scores) => {
    console.log(job)
    console.log(scores)
    const average = scores.reduce((total, score) => {
        total = total + score/scores.length
        return total
    })
    return average
}

// console.log(Average(Person.job,23,45,67,78))

const marks = [24,56,78,89]

console.log(Average(Person.job,...marks))