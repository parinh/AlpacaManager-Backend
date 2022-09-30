const FormNumbers = require('../model/formNumber.model')
const Memos = require('../model/memo.model')

// * use in updateMemoNum to convert number to 2 digits
async function toTwoDigites(num) {
    if (num.length < 2) {
      return num = "0" + num
    }
    return num
  }
// * generate number of memoForm 
async function updateMemoNum(req, res){
    var body = req.body
    var result = await FormNumbers.findOneAndUpdate({name: body.name}, {number: body.number, num: body.mNum}, {new: true});
    res.json(result);
}

async function generateNum(req, res){
  var body = req.body.num
  console.log('body====', body)
  var found = await FormNumbers.findOne({name: body})
  console.log(found)
  if(!found){
      res.json('cannot find')
      return
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
  res.status(200).json({mNum: qt_n, num: num})
}


async function createMemo(req, res){
  let body = JSON.parse(req.body.data)
  let fPath = []
  console.log('file',req.files)
  console.log(body)
  if (req.files ){
      for(let i=0; i<req.files.uploadedFile.length; i++){
        console.log(req.files)
        let file = req.files.uploadedFile[i]
        let filePath = './src/public/'+ body.num+ i + '.png'
        console.log(filePath)
        await storeFile(file, filePath)
        fPath.push('/public/'+body.num+ i +'.png')
      }
  }
  Memos.create({
    creator: body.user,
    num: body.num,
    subject: body.subject,
    content: body.content,
    image: fPath,
  })
  res.status(200).json(true)
}

async function storeFile(inFile, filePath){
  return new Promise((resolve, reject)=> {
      inFile.mv(filePath, function (err){
          reject(err)
      })
      resolve(true)
  })

}


module.exports = {
    updateMemoNum,
    createMemo,
    generateNum
}