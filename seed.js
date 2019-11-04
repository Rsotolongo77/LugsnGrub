const mongoose = require("mongoose");
const db = require("./models");

// This file empties the Books collection and inserts the books below

// OUR MONGO CONNECTION BELOW THIS LINE
mongoose.connect(
    process.env.MONGODB_URI ||
    "mongodb://localhost/mern_authenticate_me"
);
// TRUCK SEEDS BELOW THIS LINE
const truckSeed = [
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
// INSERT MORE TRUCKS FUNCTION BELOW THIS LINE, FOLLOWED BY ERROR CATCH
db.Truck
    .remove({})
    .then(() => db.Truck.collection.insertMany(truckSeed))
    .then(data => {
        console.log(data.result.n + " records inserted!");
        process.exit(0);
    })
    .catch(err => {
        console.error(err); a
        process.exit(1);
    });
