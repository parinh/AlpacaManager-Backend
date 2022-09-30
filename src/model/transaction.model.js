const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var TransactionSchema = new Schema ({
    name : String,
    price : String,
    evidence : String,
    status : String,
},    
{ timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

var Transactions = mongoose.model("transaction", TransactionSchema);

module.exports = Transactions;