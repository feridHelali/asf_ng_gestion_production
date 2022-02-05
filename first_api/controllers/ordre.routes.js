const express = require('express')
const route = express.Router()



route.get('/', (req, res) => {
    res.json(ordres)
})

route.post('/', (req, res) => {
    let o = req.body
    ordres.push(o)
    res.json(ordres)
})


module.exports = route;