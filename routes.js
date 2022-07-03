const express = require('express')
const router = express.Router()
const { something } = require('./controller/something')

router.get('/something', something)

module.exports = router