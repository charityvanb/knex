const express = require('express')
const app = express()
const port = process.env.PORT || 3001
const knex = require('knex')
const queries = require('./queries.js')
const bodyParser = require('body-parser')
const cors = require('cors')

app.use(bodyParser.json())
app.use(cors())

app.listen(port, () => {
    console.log('listening on ${port}')
    })

app.get('/', (req, res) => {
    queries.listAll()
    .then(students => res.send(students))
})

app.get('/:id', (req, res) => {
    queries.getById(req.params.id).then(students => res.send(students))
})
//the stuff on the video at 9:40ish is a problem

app.post('/', (req, res) =>{
    queries.createStudent(request.body)
    .then(response.status(201))
})
