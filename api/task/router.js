// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')
const router = express.Router()

router.get('/', (req, res) => {
    Task.find()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(err => {
            res.status(500).json({message:`${err}`})
        })
})

router.post('/', (req, res) => {
    const taskData = req.body
    Task.insert(taskData)
        .then(() => {
            res.status(201).json(taskData)
        })
        .catch(err => {
            res.status(500).json({message:`${err}`})
        })
})

module.exports = router;