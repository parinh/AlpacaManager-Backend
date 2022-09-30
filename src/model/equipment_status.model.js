const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var statusSchema = new Schema(
    {
        status: String
    }
)

var Statuses = mongoose.model('statuses', statusSchema)
module.exports = Statuses
