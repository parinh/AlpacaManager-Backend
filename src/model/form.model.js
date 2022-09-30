const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');


var Schema = mongoose.Schema;

var FormSchema = new Schema ({
    title: String,
    location: String,
    startDate: Date,
    endDate: Date,
    type: String,
    status : String,
    approveBy : { type : mongoose.Types.ObjectId, ref: 'users' },
    note: String,
    leaveType : String,
    evidence :  [{ type : String }],
    creatorId: { type : mongoose.Types.ObjectId, ref: 'users' },
    collaborator: [{ type : mongoose.Types.ObjectId, ref: 'users' }],
    vehicle : [{ type : mongoose.Types.ObjectId, ref: 'vehicles' }],
    equipment :  [{ type : mongoose.Types.ObjectId, ref: 'equipments' }],
    budget : String,
    leader : String,
    transaction : [{ type : mongoose.Types.ObjectId, ref: 'transactions' }],
    total : String,
    userEvidence : [{ type : String }],
    time : String,
    addTo: {type : mongoose.Types.ObjectId, ref: 'users'},
    isRead : Boolean,
},    
{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

var Forms = mongoose.model("forms", FormSchema);

module.exports = Forms;