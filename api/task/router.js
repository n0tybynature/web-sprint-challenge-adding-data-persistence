// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')
const router = express.Router()

router.get('/', (req, res) => {
    Tasks.findAll()
        .then((tasks) => {
            res.status(200).json(tasks)
        })
        .catch((err) => {
            res.status(500).json({message:`${err}`})
        })
})

router.post('/', (req, res) => {
    const taskData = req.body
    Tasks.create(taskData)
        .then(() => {
            res.status(201).json(taskData)
        })
        .catch((err) => {
            res.status(500).json({message:`${err}`})
        })
})

module.exports = router;