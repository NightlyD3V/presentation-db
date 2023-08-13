const knex = require('./knex')

function createMsg(message){
    return knex('Messages'.insert(message))
}

function getAllMsg() {
    return knex("Messages").select("*")
}

module.exports = {createMsg, getAllMsg}