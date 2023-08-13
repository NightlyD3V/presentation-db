const express = require('express')
const cors = require("cors")
const app = express()
const db = require('./messages.js')
const PORT = process.env.PORT || 4000

app.use(cors())

app.get('/', (req, res) => {
    res.send("It's working!")
})

app.get('/messages', async (req, res) => {
    try {
        const message = await db.getAllMsg()
        res.status(200).json({ messages: message })
    } catch(err) { console.log(err) }
})

app.post('/messages', async (req, res) => {
    const result = await db.createMsg(req.body)
    res.status(200).json({id: result[0]})
})
app.listen(PORT, () =>{
    console.log(`App is listening on ${PORT}`)
})

module.exports = app