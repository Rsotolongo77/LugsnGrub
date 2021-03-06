const path = require("path");
const router = require("express").Router();
const userRoutes = require("./users");
const truckRoutes = require("./trucks");


//User Routes
router.use("/users", userRoutes);

router.use("/trucks", truckRoutes);


// For anything else, render the html page
router.use(function (req, res) {
  res.sendFile(path.join(__dirname, "../../client/build/index.html"));
});
module.exports = router;
