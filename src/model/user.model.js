const mongoose = require("mongoose");
const {db} = require('../configs/mongo.configs');

var Schema = mongoose.Schema;

var UsersSchema = new Schema(
    {
        id: Number,
        profilePicPath: String,
        firstName: String,
        lastName: String,
        phone: String,
        position: String,
        department: String,
        role: String,
        overTime : String,
        username: String,
        password: String,

    },
    { timestamps: { createdAt: "created_at", updatedAt: "updated_at" } }
);

var Users = mongoose.model("users", UsersSchema);

module.exports = Users;
