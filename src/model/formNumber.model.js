const mongoose = require("mongoose");
const { db } = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var formNumberSchema = new Schema(
    {
        name: String,
        number: Number,
        num: String,
    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
)

var formNumbers = mongoose.model("form_numbers", formNumberSchema)

module.exports = formNumbers
