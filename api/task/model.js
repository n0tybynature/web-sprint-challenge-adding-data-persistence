// build your `Task` model here
const db = require('../../data/dbConfig')

module.exports = {
    addTask,
    findTask
}

function addTask(){
    return db('task').insert(task).into('tasks')
}

function findTask(){
    return db('task')
}

