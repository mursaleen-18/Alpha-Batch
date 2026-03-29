// Practicing one to few relationships in mongodb

const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// creating Schema.
const userSchema = new Schema({
  username: String,
  addresses: [
    {
      location: String,
      city: String,
    },
  ],
});

// creating Model.
const User = mongoose.model("user", userSchema);


// now creating functions
const addUsers = async () => {
  let user1 = new User({
    username: "sherlockholmes",
    addresses: [
      {
        _id: false,
        location: "221B Baker Street",
        city: "London",
      },
    ],
  });

  // just onother way of pushing addresses into the users > addresses array
  user1.addresses.push({
    location: "P36 Down Town",
    city: "London",
  });
  let result = await user1.save();
  console.log(result);
};

addUsers();
