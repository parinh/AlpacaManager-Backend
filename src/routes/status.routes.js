const express = require('express')
const router = express.Router()
const status = require('../services/status.sevice')

router.get('/getStatus', async function(req, res){
    try{
        status.getStatus(req,res)
    }
    catch(err){
        console.error(err.message)
    }
})

module.exports = router