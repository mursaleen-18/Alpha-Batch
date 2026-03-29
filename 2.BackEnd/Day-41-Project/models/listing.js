const mongoose = require("mongoose");
const Schema = mongoose.Schema;


const listingSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: String,
    image: {
        url: {
            type: String,
            default: "https://unsplash.com/photos/snow-capped-mountains-bathed-in-soft-sunset-light-MD3FL3s4z3s",
            set: (v) => v === "" ? "https://unsplash.com/photos/snow-capped-mountains-bathed-in-soft-sunset-light-MD3FL3s4z3s" : v,
        }
    },
    price: Number,
    location: String,
    country: String,
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;