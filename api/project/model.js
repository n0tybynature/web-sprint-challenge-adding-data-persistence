// build your `Project` model here
const db = require('../../data/dbConfig')

module.exports = {
    addProject,
    findProject
}

function addProject(){
    return db('projects').insert(project).into('projects')
}

function findProject(){
    return db('projects')
}