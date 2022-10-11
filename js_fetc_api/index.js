const url = "https://www.course-api.com/react-tours-project";


const getTours = async () => {
    try {
        const response = await fetch(url)
        if(!response.ok) {
            const message = `There was an error "${response.status}" "${response.statusText}"`
            throw new Error(message)
        }
        const data = await response.json()
        console.log(data)
    } catch (error) {
        console.log(error);
    }
}

let btn = document.getElementById("fetch");

btn.addEventListener("click", getTours)