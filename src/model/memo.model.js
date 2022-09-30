const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

let Schema = mongoose.Schema;

let MemoSchema = new Schema({
    creator: [],
    num: String,
    subject: String,
    content: String,
    image: []
},
{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

let Memos = mongoose.model('memos', MemoSchema) 
module.exports = Memos