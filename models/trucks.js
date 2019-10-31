const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
    truckName: { type: String, required: true },
    truckMenu: { type: String, required: true },
    truckLocation: { type: String, required: true },
    date: { type: Date, default: Date.now }
});

const Book = mongoose.model("Trucks", truckSchema);

module.exports = Trucks;