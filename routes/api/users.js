const router = require("express").Router();
const passport = require('passport');
const usersController = require("../../controllers/usersController");
const truckController = require("../../controllers/truckController");


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


/* Testing Endpoint */
router
  .route("/ping")
  .get(usersController.test);

module.exports = router;