let books = require('./books')
let idCounter = 8

exports.getAll = response => {
    return books
}
exports.addOne = newBook => {
    newBook.id = idCounter
    books.push(newBook)
    idCounter++
    return books
}