const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var itemSchema = new Schema({
    // *items type id number refer to itemType
    itemTypeId: String,
    equipmentNumber: String,
    detail: String,
    note: String,
    status: String,
    borrowed_by: String,
})

var Items = mongoose.model("items", itemSchema)
module.exports =Items