// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    createResource,
    getResource
}

function createResource(resource){
    return db('resource').insert(resource).into('resource')
}

function getResource(){
    return db('resource')
}