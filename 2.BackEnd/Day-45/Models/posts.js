const mongoose = require("mongoose");
const { Schema } = mongoose;

main()
  .then(() => console.log("connection successful"))
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/relationDemo");
}

// Creating Schema
const userSchema = new Schema({
  username: String,
  email: String,
});

const postSchema = new Schema({
  content: String,
  likes: Number,
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
});

// Creating Models.
const User = mongoose.model("User", userSchema);
const Post = mongoose.model("Post", postSchema);

// now creating functions
const addData = async () => {
  //   let user1 = new User({
  //     username: "magneticOG",
  //     email: "magnetic@gmail.com",
  //   });

  //   let post1 = new Post({
  //     content: "Hello world!!",
  //     likes: 7,
  //   });

  //   post1.user = user1;

  //   await user1.save();
  //   await post1.save();

  // now we will retrieve the previously stored user1 data.
  let user = await User.findOne({ username: "magneticOG" });

  let post2 = new Post({
    content: "Bye Bye",
    likes: 23,
  });

  post2.user = user;
  await post2.save();
};

// get user data
const getData = async () => {
  let result = await Post.findOne({}).populate("user");
  console.log(result);
};

// addData();
getData();