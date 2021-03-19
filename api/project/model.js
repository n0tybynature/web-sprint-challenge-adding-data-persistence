// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    addProject,
    findProject
}

function addProject(){
    return db('projects').insert(project)
}

function findProject(){
    return db('projects')
}