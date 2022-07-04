const express = require('express')
const router = express.Router()
const { login } = require('./controller/user.js')
const { getExp, addExp, delExp, updateExp, getTypesandCategory } = require('./controller/expense')

router.post('/login', login)
router.post('/add/expense', addExp)
router.get('/get/expenses', getExp)
router.delete('/delete/expenses', delExp)
router.patch('/update/expense', updateExp)
router.get('/get/type_cat', getTypesandCategory)

module.exports = router