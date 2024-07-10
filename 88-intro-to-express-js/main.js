const express = require('express')
const app = express()
const port = 3000

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/about', (req, res) => {
    res.send('this is experss.js')
})
app.get('/contact', (req, res) => {
    res.send('Hello conatact 456')
})
app.get('/blog', (req, res) => {
    res.send('Hello bolg')
})


app.get('/blog/:slug', (req, res) => {
    //logic to fetch {slug} from th db 
    //For URL : http://localhost:3000/blog/intro-to-expressjs?mode=dark&region=in
    console.log(req.params)     //will output { slug: 'intro-to-expressjs' }
    console.log(req.query)      //will output { mode: 'dark', region: 'in' }
    res.send(`Hello ${req.params.slug}`)
})



app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})