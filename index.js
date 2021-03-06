const express = require('express')
const bodyParser = require('body-parser')
const book = require('./src/routes/book')
const app = express()

app.use(bodyParser.urlencoded({extended:false}))
app.use(bodyParser.json())

app.use("/book" , book)

const PORT = 1234

app.listen(PORT, () => {
    console.log(" Server has started! ")
})