const express = require('express')
const app = express()
const port = 3000

// https://github.com/mde/ejs/wiki/Using-EJS-with-Express

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    let siteName = "Puma"
    let searchText = "Search Now"
    let arr = ["hey", 45, 74]
    res.render('index', { siteName: siteName, searchText: searchText, arr })
})

app.get('/blog/:slug', (req, res) => {
    let blogTitle = "Puma why and when ?"
    let blogContent = "Its a very good brand"
    res.render('blogpost', { blogTitle: blogTitle, blogContent: blogContent })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})  