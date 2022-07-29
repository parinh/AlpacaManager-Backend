const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var EventSchema = new Schema ({
    title: String,
    detail: String,
    startDate: Date,
    endDate: Date,
    location: String,
    type: String,
    approval: Boolean,
    creator_id: String,
    collaborator: []
},    
{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

var Events = mongoose.model("events", EventSchema);

module.exports = Events;