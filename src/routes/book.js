const express = require('express')
const book = require('../data/bookInfo')
const router = express.Router()

router.get('/', (req, res) => {
    res.send(book)
})

router.get('/search/:bookName', (req, res) => {
    book.map((traceBookArray) => {
        if(req.params.bookName === traceBookArray.name)
            res.send(traceBookArray)
    })
    res.send(" No Data Found! ")
})

router.post('/addBookRec', (req, res) =>{
    book.map((traceBookArray) => {
        if(req.params.name == traceBookArray.name)
            res.send(" Book data already Exists! ")
    })
    var data = {
        ...req.body,
        createdAt: new Date().toString()
    }
    book.push(data)
    res.send(" Book added successfully! ")
})

module.exports = router