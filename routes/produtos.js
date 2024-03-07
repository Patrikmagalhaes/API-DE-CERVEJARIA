const express = require('express')
const router = express.Router()
const controller = require('./../controllers/produtos')

router.get('/listar', controller.listarProdutos)
router.get('/lista/:nome')
router.post('/cadastrar', controller.cadastrarProduto)
router.delete('/deletar/:id', controller.removerProduto)
router.get('/total', controller.exibirTotal)

module.exports = router