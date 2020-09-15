const router = require('express').Router()

const base = require('./controllers/baseController.js')

router.get('/', base.index) 
router.post('/sum', base.sum) 

module.exports = router
