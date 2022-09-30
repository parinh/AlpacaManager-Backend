const express = require('express')
const router = express.Router()
const memo = require('../services/memo.service')

router.put('/updateNum', async function (req, res, next) {
    try {
        memo.updateMemoNum(req, res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})

router.post('/createMemo', async function(req, res, next){
    try{
        memo.createMemo(req,res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})

router.post('/generateNum', async function(req,res, next){
    try{
        console.log(req.body.num)
        memo.generateNum(req,res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})

module.exports = router