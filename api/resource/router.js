// build your `/api/resources` router here
const express = require('express')
const Resource = require('./model')
const router = express.Router()

router.get('/', ( req , res , next) => {
    Resource.getResource()
        .then( resource => {
            res.status(200).json(resource)
        })
        .catch(next)
})

router.post('/', ( req , res, next) => {

    const resourceInfo = req.body

    Resource.createResource(resourceInfo)
        .then( () => {
            res.status(201).json(resourceInfo)
        })
        .catch(next)
})


module.exports = router