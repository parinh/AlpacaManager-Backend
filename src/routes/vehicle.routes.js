const express = require('express')
const router = express.Router()
const vehicle = require('../services/vehicle.service')

router.get('/getVehicles', async function (req, res, next) {

    try {
        vehicle.getVehicle(req, res)
    }
    catch (err) {
        console.error(``, err.message);
        next(err);
    }
})

router.post('/createVehicle', async function (req, res, next) {
    try {
        vehicle.createVehicle(req, res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})

router.delete('/deleteVehicle', async function (req, res) {
    try {
        await vehicle.deleteVehicleByID(req, res)
    }
    catch (err) {
        console.error('', err.message)
    }
})

router.put('/editVehicle', async function (req, res, next) {
    try {
        vehicle.updateVehicleByID(req, res)
    }
    catch (err) {
        console.error('editEvetn err', err.message)
    }
})

router.get('/getVehicleById', async function (req, res) {
    try {
        vehicle.getVehicleById(req, res)
    }
    catch (err) {
        console.error('', err.message)
    }
})


module.exports = router