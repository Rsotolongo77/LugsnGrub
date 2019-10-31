const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const truckOwnersSchema = new Schema({
    truckName: { type: String, required: true },
    truckMenu: { type: String, required: true },
    truckLocation: { type: String, required: true },
    schedule: { type: String, required: true },
});

const Owner = mongoose.model("Owner", truckOwnersSchema);

module.exports = Owner;