const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js"); // Joi schema
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");

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

// ==================================================================
// Creating new route for testing (entering data to the database.)

router.get(
  "/testListing",
  wrapAsync(async (req, res) => {
    let sampleListing = new Listing({
      title: "My new villa",
      description: "By the beach",
      // image: "URL"
      price: 1200,
      location: "Calangute, Goa",
      country: "India",
    });
    await sampleListing.save();
    console.log("sample was saved");
    res.send("Successful Testing");
  }),
);

// index route (get request)
router.get(
  "/",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  }),
);
// ============================================================================

// =============================================================================
// New Route
router.get(
  "/new",
  wrapAsync(async (req, res) => {
    console.log(req.user);
    if(!req.isAuthenticated()){
      req.flash("error", "you must be logged in to create listing");
      return res.redirect("/login")
    }
    res.render("listings/new.ejs");
  }),
);

// =====================================================================
// show route
router.get(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id).populate("reviews");

    if (!listing) {
      req.flash("error", "Listing Your requested for does not exist");
      res.redirect("/listings");
    }

    res.render("listings/show.ejs", { listing });
  }),
);
// ======================================================================
// ========================================================================
// Create Route.
router.post(
  "/",
  validateListing,
  wrapAsync(async (req, res, next) => {
    // let {title, description, image, price, location, country} = req.body;
    const newListing = new Listing(req.body.listing);
    await newListing.save();
    // flash message
    req.flash("success", "New Listing Created!!");
    res.redirect("/listings");
    // console.log(listing);
  }),
);
// =============================================================================

// ===========================================================================
// Edit Route
router.get(
  "/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);

    if (!listing) {
      req.flash("error", "Listing Your requested for does not exist");
      res.redirect("/listings");
    }
    res.render("listings/edit.ejs", { listing });
  }),
);

// Update Route.
router.put(
  "/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    await Listing.findByIdAndUpdate(id, { ...req.body.listing }); // deconstructing the javaScript Object Listing. converting all the parameters into individual values.
    req.flash("success", "Listing Updated!!");
    res.redirect(`/listings/${id}`);
  }),
);
// =======================================================================

// ========================================================================
// Delete Route
router.delete(
  "/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let deletedListing = await Listing.findByIdAndDelete(id);
    console.log(deletedListing);
    req.flash("success", "Listing Deleted!!");
    res.redirect("/listings");
  }),
);
// ==================================================================

module.exports = router;
