const express = require('express')
const router = express.Router()
const controller = require('../controllers/cervejas')

router.get('/nome-completo/:nome', controller.BuscarCerevejaNomeCompleto)
router.get('/nomeparcial/:nome', controller.BuscarCerevejanomeParcial)
router.get('/nacionalidade/:nacionalidade', controller.buscarPorNacionalidade)
router.get('/tipo/:tipo', controller.buscarPortipo)
router.get('/maiorabv', controller.ordenarMaiorAbv)

module.exports = router