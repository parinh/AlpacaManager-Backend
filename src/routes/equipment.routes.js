const express = require('express')
const router = express.Router()
const equipment = require('../services/equipment.service')

router.post('/addEquipment', async function(req,res){
    try{
        equipment.addEquipment(req,res)
    }
    catch(err){
        console.error(err.message)
    }
})
router.get('/getEquipment', async function(req,res){
    try{
        equipment.getEquipment(req,res)
    }
    catch(err){
        console.error(err.message)
    }
})

router.put('/update', async function(req, res){
    try{
        equipment.updateEquipment(req,res)
    }
    catch(err){
        console.error(err.message)
    }
})

router.put('/updateAmount', async function(req, res){
    try{
        equipment.updateAmount(req,res)
    }
    catch(err){
        console.error(err.message)
    }
})

module.exports = router