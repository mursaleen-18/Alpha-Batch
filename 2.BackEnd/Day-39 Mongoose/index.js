const mongoose = require("mongoose");
// mongoose.connect('mongodb://127.0.0.1:27017/test');

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);

// ====================================================================================
// Print users data where age is greater than 50
// User.find({ age: { $gt: 50 } })
//   .then((res) => {
//     console.log(res);
//     // console.log(res[0].name);
//     // console.log(res[0].email);
//     // console.log(res[0].age);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ==================================================================================
// find by id
// User.findById("68f36b6183454a1dc86d6420")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ==================================================================================
// Insert One user data
// const user2 = new User({
//   name: "Steve",
//   email: "Steve@stark.in",
//   age: 56,
// });

// user2
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// =================================================================================
// update data in database
// User.updateOne({ name: "Steve" }, { age: 58 })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// =================================================================================
// find and update
// User.findOneAndUpdate({ name: "Steve" }, { age: 55 }, { new: true })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// ===================================================================================
// Update
// User.deleteMany({ age: { $lt: 30 } }).then((res) => {
//   console.log(res);
// });

User.deleteOne({ name: "Steve" }).then((res) => {
  console.log(res);
});
