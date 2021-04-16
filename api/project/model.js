const db = require("../../data/dbConfig")


module.exports = {
    postProject,
    getProject,
}

function postProject(project){
    return db('project').insert(project).into('project')
}

function getProject(){
    return db('project')
}