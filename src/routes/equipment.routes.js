const express = require('express')
const router = express.Router()
const equipment = require('../services/equipment.service')

router.post('/createEquipment', async function(req,res){
    try{
        equipment.createEquipment(req,res)
    }
    catch(err){
        console.error(err.message)
    }
})
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

router.put('/updateEquipmentById', async function(req, res){
    try{
        equipment.updateEquipmentByID(req,res)
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


router.get('/getEquipmentById', async function(req, res){
    try{
        equipment.getEquipmentById(req,res)
    }
    catch(err){
        console.error(err.message)
    }
})

module.exports = router