const express = require('express')
const app = express()
const db = require('./db/messages.js')

app.get('/', (req, res) => {
    res.send("It's working!")
})

app.get('/api', async (req, res) => {
    const messages = await db.getAllMsg()
    res.status(200).json({ messages })
})

app.post('/api', async (req, res) => {
    const result = await db.createMsg(req.body)
    res.status(200).json({id: result[0]})
})

module.exports = app