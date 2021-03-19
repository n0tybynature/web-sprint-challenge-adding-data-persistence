// build your `/api/projects` router here
const express = require('express')
const Project = require('./model')
const router = express.Router()

router.get('/', (req, res) => {
    Project.find()
        .then(project => {
            res.json(project)
        })
        .catch(err => {
            res.status(500).json({message:`${err}`})
        })
})

router.post('/', (req, res) => {
    const projectData = req.body

    Project.insert(projectData)
        .then(() => {
            res.status(200).json(projectData)
        })
        .catch(err => {
            res.status(500).json({message:`${err}`})
        })
})

module.exports = router;