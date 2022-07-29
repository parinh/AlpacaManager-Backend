const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var equipmentSchema = new Schema({
    image: String,
    name: String,
    detail: String,
    amount: Number,
    borrowed_by: [],

})

var Equipments = mongoose.model("equipments", equipmentSchema)
module.exports =Equipments