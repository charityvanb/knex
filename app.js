const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const knex = require('knex')
const queries = require('./queries.js')

app.listen(port, () => {
    console.log('listening on ${port}')
    })

app.get('/', (req, res) => {
    queries.listAll()
    .then(students => res.send(students))
})