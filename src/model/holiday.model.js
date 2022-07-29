const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var holidaySchema = new Schema({
    month: Date,
    amount: Number
})

var Holidays = mongoose.model('holidays', holidaySchema)

module.exports = Holidays
