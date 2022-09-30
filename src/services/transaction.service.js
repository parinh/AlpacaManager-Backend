const Transactions = require('../model/transaction.model')

async function getTransaction(req, res) {
    var found = await Transactions.find({})
    if (found) {
        res.json(found)
    }
    else {
        res.json('error')
    }
}

async function createTransaction(req, res)
  {
    var body =  req.body
  
    Transactions.create({
    name: body.name,
    price : body.price,
    evidence : body.evidence,
    status : body.status,
  })
  res.json('Transaction created!')
}


async function deleteTransactionByID(req, res){
  var id = req.query._id
  console.log('Transaction id ========='+ id)
  var result = await Transactions.findByIdAndDelete( id )

  if(result){
    // res.json('delete')
    res.status(200).json('deleted!')
    console.log('deleted')
  }
  else{
    console.log('error in del func')
    res.status(400).send('error in delete')
  }
}

async function updateTransactionByID(req, res){
  console.log("updated func is called")
  var _id = req.query._id
  var body = req.body;
  var result = await Transactions.findOneAndUpdate({_id: _id}, body, {new: true});
  res.json(result);
}

async function getTransactionById (req,res) {
  console.log("get Transaction by id")
  var id = req.query._id
  var result = await Transactions.findById( id )
  res.json(result)
}

module.exports = {
    getTransaction,
    createTransaction,
    deleteTransactionByID,
    updateTransactionByID,
    getTransactionById
}