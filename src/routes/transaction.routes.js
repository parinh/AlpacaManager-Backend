const express = require('express')
const router = express.Router()
const transaction = require('../services/transaction.service')

router.get('/getTransactions', async function (req, res, next) {

    try {
        transaction.getTransaction(req, res)
    }
    catch (err) {
        console.error(``, err.message);
        next(err);
    }
})

router.post('/createTransaction', async function (req, res, next) {
    try {
        transaction.createTransaction(req, res)
    }
    catch (err) {
        console.error(err.message)
        next(err)
    }
})

router.delete('/deleteTransaction', async function (req, res) {
    try {
        await transaction.deleteTransactionByID(req, res)
    }
    catch (err) {
        console.error('', err.message)
    }
})

router.put('/editTransaction', async function (req, res, next) {
    try {
        transaction.updateTransactionByID(req, res)
    }
    catch (err) {
        console.error('editEvetn err', err.message)
    }
})

router.get('/getTransactionById', async function (req, res) {
    try {
        transaction.getTransactionById(req, res)
    }
    catch (err) {
        console.error('', err.message)
    }
})


module.exports = router