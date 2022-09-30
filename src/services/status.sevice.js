const { findOneAndUpdate } = require('../model/equipment_status.model')
const Statuses = require('../model/equipment_status.model')

async function getStatus(req, res){
    let found = await Statuses.find({})
    if(found){
        res.status(200).json(found)
    }
}
module.exports = {
    getStatus
}