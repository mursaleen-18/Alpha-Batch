const express = require("express");
const mongoose = require("mongoose");
const app = express();
const path = require("path");
const Chat = require("./models/chat.js");
const methodOverride = require("method-override");
const ExpressError = require("./ExpressError");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public"))); // to tell the app that from where the static files(css,html) will be served.
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

main()
  .then(() => {
    console.log("Connection Successful");
  })
  .catch((err) => console.log(err));

async function main() {
  // await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
  await mongoose.connect("mongodb://127.0.0.1:27017/fakewhatsapp"); //changed while learning async errors
}

// =====================================================
// this insertion is now being done using the chat.js or init.js.
// inserting data into the chat model.
// let chat1 = new Chat({
//     from : "neha",
//     to: "priya",
//     msg: "send me your exam sheets",
//     created_at: new Date()
// })
// chat1.save().then((res) =>{
//     console.log(res);
// });
//=========================================================

// Index Route.
app.get("/chats", async (req, res) => {
  try {
    let chats = await Chat.find();
    res.render("index.ejs", { chats });
  } catch (err) {
    next(err);
  }
});

// New Route.  New- we goind to throw err in this new route bcz it's not async
app.get("/chats/new", (req, res) => {
  // throw new ExpressError(404, "Page not found");
  res.render("new.ejs");
});

// Create Route
app.post("/chats", (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new Chat({
    from: from,
    to: to,
    msg: msg,
    created_at: new Date(),
  });
  newChat
    .save()
    .then((result) => {
      console.log("Chat was saved.");
      res.redirect("/chats");
    })
    .catch((err) => {
      console.log(err);
      res.status(500).send("Error saving chat");
    });
});

function asyncWrap(fn) {
  return function (req, res, next) {
    fn(req, res, next).catch((err) => next(err));
  };
}

// New - Show Route
app.get(
  "/chats/:id",
  asyncWrap(async (req, res, next) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    if (!chat) {
      // throw new ExpressError(404, "Chat not found");
      next(new ExpressError(404, "Page not found"));
    }
    res.send("edit.ejs", { chat });
  }),
);

// edit route
app.get(
  "/chats/:id/edit",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat });
  }),
);

// Update route
app.put(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    const { id } = req.params;
    const { msg: newMsg } = req.body;
    const updatedChat = await Chat.findByIdAndUpdate(
      id,
      { msg: newMsg },
      { runValidators: true, new: true },
    );
    console.log(updatedChat);
    res.redirect("/chats");
  }),
);

// Updated Destroy Route with debug logs
app.delete(
  "/chats/:id",
  asyncWrap(async (req, res) => {
    let { id } = req.params;
    console.log(`Received request to delete chat with id: ${id}`);
    let chat = await Chat.findById(id);
    if (!chat) {
      console.log(`Chat with id: ${id} not found.`);
      return res.status(404).send("Chat not found");
    }

    let deletedChat = await Chat.findByIdAndDelete(id);
    console.log(`Deleted chat:`, deletedChat);
    res.redirect("/chats");
  }),
);

// setting up a route (root rout)
app.get("/", (req, res) => {
  res.send("root is working");
});

// creating another middleware to print the name of the error

const handleValidationErr = (err) => {
  console.log("This was a validation error please follow rules");
  //  console.dir(err);
  console.log(err.message);
  return err;
};

app.use((err, req, res, next) => {
  console.log(err.name);
  if (err.name === "ValidationError") {
    err = handleValidationErr(err);
  }
  next(err);
});

// New - Defining Error handling middleware
app.use((err, req, res, next) => {
  let { status = 500, message = "some error occured" } = err;
  res.status(status).send(message);
});

app.listen(8080, () => {
  console.log("server is listening on port 8080");
});
