const Menu = [
    {
        name: "pancakes",
        category: "breafast"
    },
    {
        name: "burger",
        category: "lunch"
    },
    {
        name: "Steak",
        category: "dinner"
    },
    {
        name: "bacon",
        category: "breafast"
    },
    {
        name: "eggs",
        category: "breafast"
    },
    {
        name: "pasta",
        category: "dinner"
    },
]

const categories =["all",...new Set(Menu.map((menu) => menu.category))]

console.log(categories)

let results = document.querySelector(".results");

results.innerHTML = categories.map((category) => {
    return `<button>${category}</button>`
}).join("")