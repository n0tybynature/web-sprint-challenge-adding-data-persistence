// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    addTask,
    findTask
}

function addTask(){
    return db('task').insert(task)
}

function findTask(){
    return db('task')
}

