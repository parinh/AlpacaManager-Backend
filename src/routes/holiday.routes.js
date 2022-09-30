const express = require('express')
const router = express.Router()
const holidays = require('../services/holiday.service')

router.put('/updateByMonth', async function(req,res){
    try{
        holidays.updateHolidayByMonth(req,res)
    }
    catch(err){
        console.error(err.message)
        next(err)
    }
})

module.exports = router