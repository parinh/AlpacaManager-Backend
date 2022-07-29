const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

let Schema = mongoose.Schema;

var workAttendanceSchema = new Schema({
    leave_day: Number,
    holiday: Number,
    late_day: Number,
    warning: Number,
    work_day: Number,
})

var WorkAttendances = mongoose.model('work_attendance', workAttendanceSchema)

module.exports = WorkAttendances