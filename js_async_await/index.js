const users = [
    {id: 1, name: "Rogers"},
    {id: 2, name: "Cathy"},
    {id: 3, name: "Ngabwa"},
]

const articles = [
    {userId: 1, articles: ["one", "two", "three"]},
    {userId: 2, articles: ["four", "Five"]},
    {userId: 3, articles: ["six", "seven", "eight"]},
]

const getUser = (name) => {
    return new Promise((resolve, reject) => {
        const user = users.find((userName) => userName.name === name)
        if(user) {
            return resolve(user)
        } else {
            reject(`There is no such user : ${name}`)
        }
    })
}

const getUserArticles = (id) => {
    return new Promise((resolve,reject) => {
        const userArticle = articles.find((userArt) => userArt.userId === id);

        if(userArticle) {
            resolve(userArticle.articles)
        } else {
            reject(`No such user with : ${id}`)
        }
    })
}

// getUser("Rogers").then((user) => {
//    return getUserArticles(user.id)
// }).then((articles) =>  console.log(articles)).catch()

const getUserData =  async() => {
    try {
        const user = await getUser("Cathy");
        // if(user) {
        //     const articles = await getUserArticles(user.id)
        //     console.log(articles)
        //  }
        const articles = await getUserArticles(user.id)
        console.log(articles)
    } catch (error) {
        console.log(error)
    }
}

getUserData()