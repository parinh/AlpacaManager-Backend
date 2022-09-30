const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var FullQuotationSchema = new Schema(
    {
    firstname: String,
    lastName: String,
    subName: String,
    address: String,
    phone: String,
    qList: [],
    qtNum: String,
    deparment: String,
    condition: String,
    creditTerm: String,
    beforeVat: String,
    vat: String,
    total: String,
    wordTotal: String,
    note: String,
    date: String

    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

var FullQuotations = mongoose.model("fullQuotations", FullQuotationSchema)

module.exports = FullQuotations
