const Items = require('../model/item.model')

async function createItem(req,res){
    let body = req.body
    console.log(await nameValidation(body.number))
    
    if(await nameValidation(body)) {
        Items.create(
        {
            itemTypeId: body.type,
            equipmentNumber: body.number,
            detail: body.detail,
            note: body.note,
            status: body.status,
            borrowed_by: body.borrower,
        }
        )
      res.status(200).json(true)
      return
    }
    res.json(false)

}

async function nameValidation(body){
    let result = await Items.find({equipmentNumber:body.number, itemTypeId: body.type})
    if(result.length==0){
        return true
    }
    return false
}

async function getItemByType(req,res){
    
    let result = await Items.find({itemTypeId: req.body._id})
    if( result){
        res.status(200).json(result)
        return
    }
    res.status(404).json('cannot find')
}

async function updateItem(req,res){
    let body = req.body
    let id = req.query.id
    let result = await Items.findByIdAndUpdate({_id: id}, body, {new: false})
    if(result){
        res.status(200).json('updated:'+ result)
    }
    else{
        res.status(404).json('update fail')
    }
}

module.exports = {
    createItem,
    getItemByType,
    updateItem
}