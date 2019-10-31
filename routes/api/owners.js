const router = require("express").Router();
const truckOwnersController = require("../../controllers/truckOwnersController");

// Matches with "/api/owners"
router
    .route("/:id")
    .get(truckOwnersController.findById)
    .put(truckOwnersController.update)
    .delete(truckOwnersController.remove);

module.exports = router;