const express = require('express')
const router = express.Router()
const item = require('../services/item.service')

router.post('/getEquipmentList', async function(req, res){
    try {
        item.getItemByType(req, res)
    }

    catch(err){
        console.error(err.message)
    }
})

router.post('/createEquipmentList', async function(req, res){
    try{
        item.createItem(req, res)
    }
    catch(err){
        console.error(err)
    }
})

router.put('/updateItem', async function(req,res){
    try{
        item.updateItem(req,res)
    }
    catch(err){
        console.error(err)
    }

})

module.exports = router