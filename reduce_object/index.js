const cart = [
    {
        title: "Samsung",
        price: 200000,
        amount: 1
    },
    {
        title: "Google pixel",
        price: 250000,
        amount: 2
    },
    {
        title: "Infinix",
        price: 220000.56,
        amount: 3
    },
    {
        title: "Techno",
        price: 210000.45,
        amount: 5
    },
]

const intial_object = {
    totalCartItems: 0,
    totalCartItemsAmount: 0
}
let totalCart = cart.reduce((total, cartItem) => {
    const {price, amount} = cartItem;
    total.totalCartItems = total.totalCartItems + amount
    total.totalCartItemsAmount = total.totalCartItemsAmount +  amount * price
    return total
},intial_object)

totalCart.totalCartItemsAmount = parseFloat(totalCart.totalCartItemsAmount.toFixed(2));

console.log(totalCart)

const url = "https://api.github.com/users/john-smilga/repos?per_page=100";

const fetchRepo = async () => {
    const response = await fetch(url)
    const data = await response.json();
    console.log(data)
    const newData = data.reduce((total, repo) => {
        const {language} = repo
        // if(language) {
        //     if(total[language]) {
        //         total[language] = total[language] + 1
        //     } else {
        //         total[language] = 1
        //     }
        // }
        if(language) {
            total[language] = total[language] + 1 || 1
        }
        return total
    },{})
    console.log(newData)

}

console.log(fetchRepo())
