const express = require('express')
const bodyParser = require('body-parser')
const routes = require('./routes/produtos')

const port = 3000
const app = express()

app.use(bodyParser.json())
app.use('/produtos', routes)

app.listen(port, () => {
    console.log('Servidor rodando')
})