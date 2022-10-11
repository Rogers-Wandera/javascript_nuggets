let text = document.querySelectorAll(".item");

const itemList = Array.from(text).find((txt) => txt.textContent === "Person")
console.log(itemList)

const items =  Array.from({length: 120}, (_,index) => {
    return index
})

const itemsPerPage = 10;
const pages = Math.ceil(items.length / itemsPerPage);

const newItems = Array.from({length: pages}, (_,index) => {
    const start = index * itemsPerPage
    console.log(start)
    const tempItems = items.slice(start,start + itemsPerPage)
    return tempItems
})