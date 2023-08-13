const knex = require('knex')(require('./knex').development)

function createMsg(message){
    return knex('Messages'.insert(message))
}

function getAllMsg() {
    return knex("Messages").select("*")
}

module.exports = {createMsg, getAllMsg}