const express = require('express')
const router = express.Router()
const user = require('../services/user.service')

router.post('/signin', async function(req,res,next){
  try {
    user.authenticate(req, res)
  }
  catch (err){
    console.error(` `, err.message);
    next(err);
  }
})

router.post( '/signout', async function signout(req,res){
  try {
      req.session = null
      return res.status(200).send( "You've been signed out!" )
  } catch (err) {
      this.next(err)
  }
})

router.get('/getUser', async function(req,res,next){

  try{
    user.getData(req,res)
  }
  catch (err){
    console.error(``, err.message);
    next(err);
  }
})

router.get('/getUserByName', async function(req,res){
  try{
    user.findUserByName(req, res)
  }
  catch(err){
    console.err('', err.message)
  }
})

router.put('/updateUser', async function(req, res, next){
  try {
      user.updateByID(req,res)
  }
  catch (err){
    console.error('', err.message)
  }
})

router.delete('/deleteUser', async function(req, res){
  try{
    await user.deleteByID(req, res)
  }
  catch(err){
    console.error('', err.message)
  }
})

router.get('/getFullname', async function(req,res){
  try{
    user.getFullname(req, res)
  }
  catch(err){
    console.err('', err.message)
  }
})

router.get('/getUserById', async function(req,res){
  try{
    user.getUserById(req, res)
  }
  catch(err){
    console.err('', err.message)
  }
})

router.post('/createUser', async function (req, res, next) {
  try {
    user.createUser(req, res)
  }
  catch (err) {
    console.error(err.message)
    next(err)
  }
})
module.exports = router
