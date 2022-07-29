const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var UsersSchema = new Schema(
    {
        id: Number,
        firstName: String,
        lastName: String,
        phone: String,
        Position: String,
        department: String,
        role: String,
        username: String,
        password: String,

    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

var Users = mongoose.model("users", UsersSchema);

module.exports = Users;
