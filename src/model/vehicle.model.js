const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var VehicleSchema = new Schema ({
    vehicleType : String,
    transportName : String,
    distance : String,
    evidence : String,
    status : String,
},    
{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

var Vehicles = mongoose.model("vehicles", VehicleSchema);

module.exports = Vehicles;