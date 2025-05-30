const express = require("express");
const app = express();
let port = 8080;
const path = require("path");
const { v4: uuidv4 } = require("uuid"); //uuidv4(); ⇨ '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
const methodOverride = require("method-override");

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

//The data or the source that we are working on.
let posts = [
  {
    id: uuidv4(),
    username: "apnacollege",
    content: "I love coding!",
  },
  {
    id: uuidv4(),
    username: "MursaleenSTB",
    content: "consistancy is the key to success!",
  },
  {
    id: uuidv4(),
    username: "Ibrahim",
    content: "life is unfair!",
  },
];

//root or home page.
app.get("/posts", (req, res) => {
  res.render("index.ejs", { posts });
});

//the form where we can write new post.
app.get("/posts/new", (req, res) => {
  res.render("new.ejs");
});

//Creating new post
app.post("/posts", (req, res) => {
  // console.log(req.body); //to see the data in console.
  let { username, content } = req.body;
  let id = uuidv4();
  posts.push({ id, username, content });
  // res.send("post request working"); //just to check if this post request is working.
  res.redirect("/posts"); //after writing the new post you will be redirected to this page.
});

//getting individual post using id.
app.get("/posts/:id", (req, res) => {
  let { id } = req.params;
  //   console.log(id);
  let post = posts.find((p) => id === p.id); // to find wheather the entered id is matching with any of the ids in the data.
  //   console.log(post);
  //   res.send("request working");
  res.render("show.ejs", { post });
});

//Patch request, update individual post.
app.patch("/posts/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let newContent = req.body.content;
  // console.log(newContent);
  let post = posts.find((p) => id === p.id);
  post.content = newContent;
  console.log(post); //to see the new patched post in the console.
  res.redirect("/posts"); //redirects to homePage.
});

//Update or Edit content.
app.get("/posts/:id/edit", (req, res) => {
  let { id } = req.params;
  let post = posts.find((p) => id === p.id);
  res.render("edit.ejs", { post });
});

//Delete route.
app.delete("/posts/:id", (req, res) => {
  let { id } = req.params;
  posts = posts.filter((p) => id !== p.id);
  // res.send("DELETE success");
  res.redirect("/posts");
});

app.listen(port, () => {
  console.log("listening to port: 8080"); //checking wheather server is working or not.
});
