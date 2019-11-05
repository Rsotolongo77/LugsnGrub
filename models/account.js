const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const passportLocalMongoose = require('passport-local-mongoose');

const Account = new Schema({
    username: String,
    password: String,
    email: String,
    trucks: [{
        type: Schema.Types.ObjectId,
        ref: 'Truck'
    }]
});

Account.plugin(passportLocalMongoose);

module.exports = mongoose.model('accounts', Account);
