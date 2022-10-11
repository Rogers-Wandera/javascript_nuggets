// const random = 2

// const promise = new Promise((resolve, reject) => {
//     let randomNumber = Math.floor(Math.random() * 3)

//     if(randomNumber === random) {
//         resolve("You guessed right")
//     } else {
//         reject("Number does not match")
//     }
// })

// console.log(promise)

let btn = document.getElementById("btn");

const ChnageColor = () => {
    btn.addEventListener("click", function() {
        Color("red",".first",1000).then(() =>{
            Color("blue", ".second", 2000)
        }).then(() => {
            Color("green",".last", 3000)
        })
        .catch((err) => console.log(err))
    })
}
ChnageColor()

const Color = (color,selector,time) => {
    let element = document.querySelector(selector);
    return new Promise((resolve,reject) => {
        if(element) {
            setTimeout(() => {
                element.style.color = color
                resolve()
            },time)
        } else {
            reject("No element found" + " " +{element})
        }
    })
}