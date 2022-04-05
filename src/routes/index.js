const express = require('express')
const prods = require('./prods')
const router = express.Router()

router.get('/', (req, res) => {
    res.json({msg: 'Router principal'})
})

// router.use('/prods', prods);


module.exports = router;