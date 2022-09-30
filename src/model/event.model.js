const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var EventSchema = new Schema ({
    title: String,
    note: String,
    startDate: Date,
    endDate: Date,
    location: String,
    scheduleType: String,
    approval: Boolean,
    creatorId: { type : mongoose.Types.ObjectId, ref: 'users' },
    collaborator: [{ type : mongoose.Types.ObjectId, ref: 'users' }],
},    
{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

var Events = mongoose.model("events", EventSchema);

module.exports = Events;