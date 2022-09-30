const Equipments = require('../model/equipment.model')

// * validate name of created equipment
async function nameValidation(inName){
    let result = await Equipments.find({name: inName})
    if(result.length == 0){
        return true
    }
    else{
        return false
    }

}

async function addEquipment(req,res){   
    let body = JSON.parse(req.body.data)
    if (await nameValidation(body.name)){
        console.log(true)
        let fPath = null
        console.log(!req.files)
        if (req.files ){
            console.log(req.files)
            let file = req.files.uploadedFile
            let filePath = './src/public/'+ body.name+ new Date() + '.png'
            console.log(filePath)
            await storeFile(file, filePath)
            fPath = '/public/'+body.name+ new Date()+'.png'
        }
    
        Equipments.create({
            name: body.name,
            detail: body.detail,
            amount: body.amount,
            note: body.note,
            image: fPath
    
        })
        res.json(true)
   
    }
    else{
        res.json(false)
    }
}

async function storeFile(inFile, filePath){
    return new Promise((resolve, reject)=> {
        inFile.mv(filePath, function (err){
            reject(err)
        })
        resolve(true)
    })

}

async function updateValidation(id, name){
    console.log('validation')
    // * get equipment from name and check if ithe name is itself name or not
    let found = await Equipments.find({name: name})
    console.log(found.length)
    if (found.length == 1){
        if(found[0]._id == id){
            return true
        }
    }
    else if(found.length == 0){
        return true
    }
    return false

    
    
}

async function updateEquipment(req, res){
    let _id = req.query._id
    let data = JSON.parse(req.body.data)
    let is_valid = await updateValidation(_id, data.name)

    if (is_valid ){
        console.log('valid')
        // * check if there is inputFile then move file to public dir
        if(req.files){
            let file = req.files.uploadedFile
            let filePath = './src/public/'+ JSON.parse(req.body.data).name+ new Date()+'.png'
            data.image = '/public/'+data.name+ new Date()+'.png'
            await storeFile(file, filePath)
        }
    
        let result = await Equipments.findOneAndUpdate({_id: _id}, data, {new: true});
        if(result){
            res.status(200).json('updated:'+ result)
        }
        else{
            res.status(404).json('update fail')
        }
    }
    else{
        res.json('duplicate')
        return 
    }

}

async function updateAmount(req, res){
    let body = req.body
    let newAmount = body.amount += 1
    let result = await Equipments.findOneAndUpdate({_id: body._id}, {amount: newAmount}, {new: true});
    if(result){
        res.status(200).json('updated:'+ result)
    }
    else{
        res.status(404).json('update fail')
    }
}

async function getEquipment(req, res){
    let found = await Equipments.find({})
    if(found){
        res.status(200).json(found)
    }
    else{
        res.status(404).json({message: 'cannot find', status:404})
    }
    
}


module.exports = {
    addEquipment,
    getEquipment,
    updateEquipment,
    updateAmount
}