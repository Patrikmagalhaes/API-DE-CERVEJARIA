const database = require('./../database')

exports.BuscarCerevejaNomeCompleto = (req, res) => {
    const { nome } = req.params
    const query = 'SELECT * FROM cervejas WHERE nome = $1'
    database.query(query, [nome]).then((resultado) => {
        res.status(200).send({ produtos: resultado.rows[0] })
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

exports.cadastrarProduto = (req, res) => {
    const { preco, descricao } = req.body
    const query = 'INSERT INTO produtos (preco, descricao) VALUES ($1, $2)'

    database.query(query, [preco, descricao]).then(() => {
        res.status(201).send({ status: 'Produto inserido!' })
    }, () => {
        res.status(500).send({ status: 'Erro ao inserir produto' })
    })
}

exports.removerProduto = (req, res) => {
    const { id } = req.params

    database.query('DELETE FROM cervejas WHERE id = $1', [id]).then(() => {
        res.status(200).send({ status: 'Produto removido' })
    })
}

exports.exibirTotal = (req, res) => {
    database.query('SELECT SUM(preco) FROM produtos').then((resultado) => {
        res.status(200).send({ total: resultado.rows[0].sum })
    })
}