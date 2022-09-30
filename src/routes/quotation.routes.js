const express = require('express')
const router = express.Router()
const quotation = require('../services/quotation.service')

router.post('/createQuotation', async function (req, res, next) {
    try {
        quotation.createQuotation(req, res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
}
)

router.get('/getQNumByDate', async function (req, res, next) {
    try {
        quotation.getQuotationNum(req, res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})
router.get('/rename', async function (req, res, next) {
    try {
        res.send(await quotation.updateCollection())
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})

router.put('/updateNum', async function (req, res, next) {
    try {
        quotation.updateQTnum(req, res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})

module.exports = router