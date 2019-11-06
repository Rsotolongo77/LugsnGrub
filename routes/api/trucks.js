const router = require("express").Router();
const truckController = require("../../controllers/truckController");

// // Matches with "/api/trucks"
// router.route("/")
//     .get(truckController.findAll);

// Matches with "/api/users
router.route("/owners")
    .get(truckController.findAll)
    .post(truckController.create);

// Matches with "/api/trucks/:iusername
router
    .route("/:username")
    .get(truckController.findById)
    .post(truckController.create)
    .put(truckController.update)
    .delete(truckController.remove);

// Matches with "/api/trucks/truck/:id
router
    .route("/truck/:id")
    .get(truckController.findTruckById)
    .put(truckController.update)
    .delete(truckController.remove);


module.exports = router;