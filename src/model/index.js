const mongoose = require('mongoose');

mongoose.Promise = global.Promise;
const sdb = {};
sdb.mongoose = mongoose;
sdb.user = require("./user.model");
sdb.event = require("./event.model")

module.exports = sdb;