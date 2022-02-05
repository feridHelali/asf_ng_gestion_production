const express = require('express')
const route = express.Router()

route.get('/', (req, res) => {
    res.json(users)
})

route.post('/', (req, res) => {
    let user = req.body
    users.push(user)
    res.json(users)
})


module.exports = route;