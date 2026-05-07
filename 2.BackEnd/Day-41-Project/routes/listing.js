const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js"); // Joi schema
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn, isOwner } = require("../middleware.js");

const listingController = require("../controllers/listings.js");

const multer = require("multer");

const { storage } = require("../cloudConfig.js");

const upload = multer({ storage });
// ==================================================================

// turning the schema validation into a middleware.
const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

// Router.route ( grouping similar routes )
router
  .route("/")
  .get(wrapAsync(listingController.index)) // Index route
  .post(
    // Create Route
    isLoggedIn,
    upload.single("listing[image]"),
    validateListing,
    wrapAsync(listingController.createListing),
  );

// =============================================================================
// New Route
router.get("/new", isLoggedIn, wrapAsync(listingController.renderNewForm));

router
  .route("/:id")
  .get(wrapAsync(listingController.showListing)) // show route
  .put(
    // Update Route.
    isLoggedIn,
    isOwner,
    validateListing,
    wrapAsync(listingController.updateListing),
  )
  .delete(isLoggedIn, isOwner, wrapAsync(listingController.destroyListing)); // Delete Route

// ===========================================================================
// Edit Route
router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAsync(listingController.renderEditForm),
);

module.exports = router;
