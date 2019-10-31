const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckOwnersSchema = new Schema({
    truckName: { type: String, required: true },
    truckMenu: { type: String, required: true },
    truckLocation: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Owners", truckOwnersSchema);

module.exports = Owners;