const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckSchema = new Schema({
    truckName: { type: String, required: false },
    truckPic: { type: String, required: false },
    truckMenu: { type: String, required: false },
    truckSchedule: { type: String, required: false },
    truckCuisine: { type: String, required: false }
});

const Truck = mongoose.model("Truck", truckSchema);

module.exports = Truck;