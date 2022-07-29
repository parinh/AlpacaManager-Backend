const WorkAttendances = require('../model/work_attendance.model')
const {db} = require('../configs/mongo.configs');

async function getAll(req,res){
    WorkAttendances.find({})
}

module.exports = {
    getAll
}