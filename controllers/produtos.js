const database = require('./../database')

exports.listarProdutos = (req, res) => {
    database.query('SELECT * FROM cervejas').then((resultado) => {
        res.status(200).send({ produtos: resultado.rows })
    }, () => {
        res.status(500).send({ status: 'Erro de database' })
    })
}
exports.listarPeloNome = (req, res) => {
    const { nome } = req.body
    const query = 'SELECT $1 FROM cervejas'
    database.query(query,[nome] ).then(() =>{
        res.status(200).send({status: "produto inserido"})
    }), ()=>{
        res.status(500).send({status: "Deu merda"})
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

    database.query('DELETE from produtos WHERE id=$1', [id]).then(() => {
        res.status(200).send({ status: 'Produto removido' })
    })
}

exports.exibirTotal = (req, res) => {
    database.query('SELECT SUM(preco) FROM produtos').then((resultado) => {
        res.status(200).send({ total: resultado.rows[0].sum })
    })
}