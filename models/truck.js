const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
    truckName: { type: String, required: true },
    truckMenu: { type: String, required: true },
    truckLocation: { type: String, required: true },
    schedule: { type: String, required: true }
});

const Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;