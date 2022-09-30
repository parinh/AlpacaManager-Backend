const express = require('express')
const router = express.Router()
const announcement = require('../services/announcement.service')

router.get('/getAnnouncements', async function (req, res, next) {

    try {
      announcement.getAnnouncements(req, res)
    }
    catch (err) {
      console.error(``, err.message);
      next(err);
    }
  })

  router.get('/getAnnouncementById', async function (req, res, next) {

    try {
      announcement.findAnnouncebyId(req, res)
    }
    catch (err) {
      console.error(``, err.message);
      next(err);
    }
  })

  router.post('/createAnnouncement', async function (req, res, next) {
    try {
      announcement.createAnnouncement(req, res)
    }
    catch (err) {
      console.error(err.message)
      next(err)
    }
  })

  router.delete('/deleteAnnouncement', async function (req, res) {
    try {
      await announcement.deleteAnnounceByID(req, res)
    }
    catch (err) {
      console.error('', err.message)
    }
  })

  router.put('/editAnnouncement', async function (req, res, next) {
    try {
      announcement.updateAnnounceByID(req, res)
    }
    catch (err) {
      console.error('editAnnouncement err', err.message)
    }
  })
  

module.exports = router