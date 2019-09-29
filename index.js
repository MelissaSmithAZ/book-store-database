const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const app = express()
let books = require('./books')
const port = 8082
const bookService = require('./bookService')

app.use(cors())
app.use(bodyParser.json())



app.get('/api/books', (req, res) => res.json(books))

app.get('/api/books/queries', (req, res) => {
    let desiredBook =books.find(book => book.id === Number(req.query.id))
    res.json(desiredBook)
})

app.post('/api/books', (req, res) => {
    res.json(bookService.addOne(req.body))

})


app.delete('/api/books/delete/:id', (req, res) => {
    books = books.filter(book => book.id !== Number(req.params.id))
    res.json(books)
})

app.patch('/api/books/:id', (req, res) => {
    let desiredBook = books.find(book => book.id === Number(req.params.id))
    if (!desiredBook) res.status(400).send('book not found')
    desiredBook.title = req.body.title
    desiredBook.subtitle = req.body.subtitle
    desiredBook.author = req.body.author
    desiredBook.published = req.body.published
    desiredBook.publisher = req.body.publisher
    desiredBook.pages = req.body.pages
    desiredBook.description = req.body.description
    desiredBook.website = req.body.website
    desiredBook.price = req.body.price
    desiredBook.inCart = req.body.inCart
    desiredBook.coverImg = req.body.coverImg
    
    res.json(desiredBook)
    //your logic is in the 
})









app.listen(port, () => console.log(`listning on port: ${port}`))