const express = require('express')
const router = express.Router()
const controller = require('./../controllers/produtos')

router.get('/nome-completo/:nome', controller.BuscarCerevejaNomeCompleto)
router.get('/nomeparcial/:nome', controller.BuscarCerevejanomeParcial)
router.post('/cadastrar', controller.cadastrarProduto)
router.delete('/deletar/:id', controller.removerProduto)
router.get('/total', controller.exibirTotal)

module.exports = router