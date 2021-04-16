const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', ( req, res, next) => {
    Task.getTask()
        .then( task => {
            res.status(200).json(task)
        })
        .catch(next)
})

router.post('/', ( req, res , next) => {
    const taskInfo = req.body

    Task.postTask(taskInfo)
        .then( () => {
            res.status(201).json(taskInfo)
        })
})

module.exports = router