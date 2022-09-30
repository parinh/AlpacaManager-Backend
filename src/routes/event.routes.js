const express = require('express')
const router = express.Router()
const event = require('../services/event.service')

router.get('/getEvents', async function (req, res, next) {

  try {
    event.getEvents(req, res)
  }
  catch (err) {
    console.error(``, err.message);
    next(err);
  }
})

router.post('/createEvent', async function (req, res, next) {
  try {
    event.createEvent(req, res)
  }
  catch (err) {
    console.error(err.message)
    next(err)
  }
})

router.get('/getEventById', async function (req, res, next) {

  try {
    event.findEventbyId(req, res)
  }
  catch (err) {
    console.error(``, err.message);
    next(err);
  }
})

router.put('/editEvent', async function (req, res, next) {
  try {
    event.updateByID(req, res)
  }
  catch (err) {
    console.error('editEvetn err', err.message)
  }
})

router.delete('/deleteEvent', async function (req, res) {
  try {
    await event.deleteByID(req, res)
  }
  catch (err) {
    console.error('', err.message)
  }
})

router.post('/getByMonth', async function (req, res) {
  try {
    await event.getByMonth(req, res)
  }
  catch (err) {
    console.error('', err.message)
  }
})

module.exports = router