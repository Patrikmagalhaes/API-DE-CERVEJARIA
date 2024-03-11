const database = require('../database')

exports.BuscarCerevejaNomeCompleto = (req, res) => {
    const { nome } = req.params
    const query = 'SELECT * FROM cervejas WHERE nome = $1'
    database.query(query, [nome]).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows[0] })
    }, () => {
        res.status(500).send({ status: 'Erro de database' })
    })
}
exports.buscarPorNacionalidade = (req, res) => {
    const { nacionalidade } = req.params
    const query = 'SELECT * FROM cervejas WHERE nacionalidade = $1'
    database.query(query, [nacionalidade]).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows[0] })
    }, () => {
        res.status(500).send({ status: 'Erro de database' })
    })
}

exports.buscarPortipo = (req, res) => {
    const { tipo } = req.params
    const query = 'SELECT * FROM cervejas WHERE tipo = $1'
    database.query(query, [tipo]).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows[0] })
    }, () => {
        res.status(500).send({ status: 'Erro de database' })
    })
}

exports.ordenarMaiorAbv = (req, res) => {
   
    const query = 'SELECT * FROM cervejas ORDER BY abv DESC'
    database.query(query).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, () => {
        res.status(500).send({ status: 'Erro de database' })
    })
}

exports.BuscarCerevejanomeParcial = (req, res) => {
    const { nome } = req.params
    const query = 'SELECT * FROM cervejas WHERE nome LIKE $1'
    database.query(query, [`%${nome}%`]).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows[0]})
    }), () => {
        res.status(500).send({ status: "Deu merda" })
    }
}

