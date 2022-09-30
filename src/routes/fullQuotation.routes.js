const express = require('express')
const router = express.Router()
const fullQuotation = require('../services/fullQuotation.service')

router.post('/createNew', async function(req, res, next){
    try{
        fullQuotation.createFullQT(req,res)
    }
    catch(err){
        console.error(err.message)
        next(err)
    }
} )

module.exports = router