// build your `Task` model here
const db = require('../../data/dbConfig')


module.exports = {
    postTask,
    getTask
}

function postTask(task){
    return db('task').insert(task).into('task')
}

function getTask(){
    return db('task')
}