// build your `/api/resources` router here
const express = require('express')
const router = express.Router()
const Resource = require('./model')


router.get('/', (req,res) => {
    Resource.findAll()
        .then(resource => {
            res.status(200).json(resource);
        })
        .catch(err => {
            res.status(500).json({message:`${err}`})
        })
})



router.post('/', (req,res) => {
    const resourceData = req.body;
    Resource.create(resourceData)
        .then(() => {
            res.status(201).json(resourceData);
        })
        .catch(err => {
            res.status(500).json({message: `${err}`})
        })
})

module.exports = router;