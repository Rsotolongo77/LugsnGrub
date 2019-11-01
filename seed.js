const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/reactreadinglist"
);

const bookSeed = [
    {
        truckName: "testy-tacos",
        truckMenu: ["tacos", "mexican pizza", "enchiladas", "burritos"],
        truckLocation: "Oviedo",
        schedule: "Monday",
        truckCuisine: "Mexican"
    },
    {
        truckName: "italian stallion",
        truckMenu: ["pizza", "pasta", "cannolis"],
        truckLocation: "Oviedo",
        schedule: ["tuesday", "friday"],
        truckCuisine: "italian"
    },
    {
        truckName: "stevens korean delights",
        truckMenu: ["rice and steak bowl", "edamame", "noodles"],
        truckLocation: "Sanford",
        schedule: ["thursday", "friday", "saturday"],
        truckCuisine: "korean"
    },
    {
        truckName: "caribbean crusin",
        truckMenu: ["rice with beans", "red snapper", "rum cake", "plantains"],
        truckLocation: "Kissimmee",
        schedule: ["Monday", "wednesday", "friday"],
        truckCuisine: "caribbean"
    },
    {
        truckName: "the greek guru",
        truckMenu: ["falafel", "gyros", "hummus", "pitas"],
        truckLocation: "altamonte",
        schedule: "sunday",
        truckCuisine: "mediterranean"
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
