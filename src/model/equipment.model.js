const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;


var EquipmentSchema = new Schema({
    image: String,
    name: String,
    detail: String,
    note: String,
    status: String,
    tag:String,
    borrowedBy : { type : mongoose.Types.ObjectId, ref: 'users' },

},
{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)


var Equipments = mongoose.model("equipments", EquipmentSchema)
module.exports = Equipments