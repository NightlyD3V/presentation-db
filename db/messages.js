const knex = require('./knex')

function createMsg(message){
    return knex('message'.insert(message))
}

function getAllMsg() {
    return knex("message").select("*")
}

module.exports = {createMsg, getAllMsg}