const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var AnnouncementSchema = new Schema ({
    title: String,
    location: String,
    startDate: Date,
    endDate: Date,
    announcementType: String,
    note: String,
    creatorId: { type : mongoose.Types.ObjectId, ref: 'users' },
    collaborator: [{ type : mongoose.Types.ObjectId, ref: 'users' }],
},    
{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

var Announcements = mongoose.model("announcements", AnnouncementSchema);

module.exports = Announcements;