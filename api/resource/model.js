// build your `Resource` model here
const db = require('../../data/dbConfig')

module.exports = {
    addResource,
    findResource
}

function addResource(){
    return db('resources').insert(resource)
}

function findResource(){
    return db('resources')
}