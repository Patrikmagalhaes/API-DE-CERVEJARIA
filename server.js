const express = require('express')
const bodyParser = require('body-parser')
const routes = require('../API-DE-CERVEJARIA/routes/cervejas')

const port = 3000
const app = express()

app.use(bodyParser.json())
app.use('/cervejas', routes)

app.listen(port, () => {
    console.log('Servidor rodando')
})