const router = require("express").Router();
const truckController = require("../../controllers/truckController");

// // Matches with "/api/trucks"
// router.route("/")
//     .get(truckController.findAll);

// Matches with "/api/users
router.route("/")
    .get(truckController.findAll)
    .post(truckController.create);

// Matches with "/api/users/:id"
router
    .route("/:id")
    // .get(truckController.findById)
    .put(truckController.update)
    .delete(truckController.remove);


module.exports = router;