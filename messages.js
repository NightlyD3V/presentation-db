const knex = require('./knex.js')

function createMsg(message){
    return knex('Messages'.insert(message))
}

function getAllMsg() {
    return knex("Messages").select("*")
}

module.exports = {createMsg, getAllMsg}