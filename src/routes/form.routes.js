const express = require('express')
const router = express.Router()
const form = require('../services/form.service')

router.get('/getForms', async function (req, res, next) {

    try {
        form.getForm(req, res)
    }
    catch (err) {
        console.error(``, err.message);
        next(err);
    }
})

router.post('/createForm', async function (req, res, next) {
    try {
        form.createForm(req, res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})

router.delete('/deleteForm', async function (req, res) {
    try {
        await form.deleteFormByID(req, res)
    }
    catch (err) {
        console.error('', err.message)
    }
})

router.put('/updateForm', async function (req, res, next) {
    try {
        form.updateFormByID(req, res)
    }
    catch (err) {
        console.error('updateForm err', err.message)
    }
})



module.exports = router