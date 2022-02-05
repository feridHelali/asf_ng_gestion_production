const express = require('express')
const route = express.Router()



route.get('/', (req, res) => {
    res.json(products)
})

route.post('/', (req, res) => {
    let product = req.body
    products.push(product)
    res.json(products)
})


module.exports = route;