const FormNumbers = require('../model/formNumber.model')
const {db} = require('../configs/mongo.configs');

async function createQuotation(req, res){
    FormNumbers.create({
        qname: 'MD',
        number: 00,
        num: 'MD220700',
    })
    res.json('quotation created')
}

async function getQuotationNum(req,res){

    var found = await FormNumbers.find({})
    if (found) {
        res.json(found)
    }
    else {
        res.json('error')

    }
} 

async function toTwoDigites(num) {
    if (num.length < 2) {
      return num = "0" + num
    }
    return num
  }

async function updateQTnum(req, res){

    var body = req.body.qNum
    console.log('body====', body)
    var found = await FormNumbers.findOne({name: body})
    console.log(found)
    if(!found){
        res.json('cannot find')
    }
    var today = new Date()
    var updated_date = new Date(found.updated_at)
    if ((updated_date.getMonth()) == today.getMonth()) {
      console.log('today' , today)
      var monthNum = today.getMonth() + 1
      var month = await toTwoDigites(monthNum.toString())
      var qtn = await toTwoDigites(String(found.number += 1))
      console.log('month', month, 'num', qtn)
      var qt_n = body + today.getFullYear().toString().substr(-2) + month + qtn
      var num = found.number
    }
    else{ 
        res.json('error')
        return 
    }
    var result = await FormNumbers.findOneAndUpdate({name: body}, {number: num, num: qt_n}, {new: true});
    res.json(qt_n);
}

async function updateCollection() {
    return await FormNumbers.updateMany({},{
        $rename : {qt_num: "num"}
    })

    // return await FormNumbers.find()
}
module.exports = {
    createQuotation,
    getQuotationNum,
    updateQTnum,
    updateCollection

}