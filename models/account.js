const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    email: String,
    truckName: String,
    city: String,
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
