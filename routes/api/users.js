const router = require("express").Router();
const passport = require('passport');
const usersController = require("../../controllers/usersController");
const router = require("express").Router();
const truckOwnersController = require("../../controllers/truckOwnersController");

// Matches with "/api/users"
router.route("/")
  .get(usersController.getUser);

/* Authentication Routes */
router.route("/register")
  .post(usersController.register);

router.route("/login")
  .post(passport.authenticate('local', { failureRedirect: '/login' }), usersController.login);

router.route("/logout")
  .get(usersController.logout);


// Matches with "/api/users/:id"


// Matches with "/api/owners
router.route("/")
  .get(truckOwnersController.findAll)
  .post(truckOwnersController.create);

// Matches with "/api/owners/:id"
router
  .route("/:id")
  .get(truckOwnersController.findById)
  .put(truckOwnersController.update)
  .delete(truckOwnersController.remove);


/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;