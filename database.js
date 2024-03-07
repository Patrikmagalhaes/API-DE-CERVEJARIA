const pg = require('pg')

const database = new pg.Client('postgres://jfjvlnyt:VqxAKlw3ZYA1CrcQa43cKdiPZ8FdP-8N@kesavan.db.elephantsql.com/jfjvlnyt')

database.connect((erro) => {
    if (erro) return console.log('Erro na conexão com o DB', erro)
    return console.log('Conectado ao DB!')
})

module.exports = database