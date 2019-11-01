const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
    {
        truckName: "test",
        truckMenu: "test",
        truckLocation: "test",
        schedule: "test"
    }
];

db.Truck
    .remove({})
    .then(() => db.Truck.collection.insertMany(bookSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err); a
        process.exit(1);
    });
