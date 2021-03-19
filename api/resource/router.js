// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')


router.get('/', (req,res) => {
    Resource.find()
        .then(resource => {
            res.json(resource);
        })
        .catch(err => {
            res.status(500).json({message:"Failed to get resources"})
        })
})

router.post('/', (req,res) => {
    const resourceData = req.body;
    Resource.add(resourceData)
        .then(() => {
            res.status(201).json(resourceData);
        })
        .catch(err => {
            res.status(500).json({message: `${err}`})
        })
})

module.exports = router;