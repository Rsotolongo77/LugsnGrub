const router = require("express").Router();
const truckController = require("../../controllers/truckController");

// Matches with "/api/trucks"
router.route("/")
    .get(truckController.findAll)

module.exports = router;