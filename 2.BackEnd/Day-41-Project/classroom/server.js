const express = require("express");
const app = express();
const cookieParser = require("cookie-parser");

const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");

// setting up the view engine.
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

const sessionOptions = {
  secret: "mysupersecretsting",
  resave: false,
  saveUninitialized: true,
};

app.use(session(sessionOptions));
app.use(flash());

app.use((req, res, next) => {
  res.locals.successMsg = req.flash("success");
  res.locals.errorMsg = req.flash("error");
  next();
});

app.get("/register", (req, res) => {
  let { name = "anonymous" } = req.query;
  req.session.name = name;
  if (name === "anonymous") {
    req.flash("error", "user not registered");
  } else {
    req.flash("success", "user registered successfully");
  }
  console.log(req.session.name);
  // res.send(name);
  res.redirect("/hello");
});

app.get("/hello", (req, res) => {
  // res.send(`hello, ${req.session.name}`);

  res.render("page.ejs", { name: req.session.name });
});

// app.get("/test", (req, res) => {
//   res.send("test successful");
// });

// app.get("/reqcount", (req, res) => {
//   if (req.session.count) {
//     req.session.count++;
//   } else {
//     req.session.count = 1;
//   }
//   res.send(`you sent a request ${req.session.count} times`);
// });

// ======================================================================

// const users = require("./routes/user.js");
// const posts = require("./routes/post.js");

// // using the cookie parser
// app.use(cookieParser("secrecode"));

// // signed cookie
// app.get("/getsignedcookie", (req, res) => {
//   res.cookie("made-in", "India", { signed: true });
//   res.send("signed cookie sent");
// });

// // verify the signed cookie
// app.get("/verify", (req, res) => {
//   console.log(res.signedCookies);
//   res.send("verified");
// });

// app.get("/getcookies", (req, res) => {
//   res.cookie("greet", "hello");
//   res.send("sent you some cookies!");
// });

// app.get("/greet", (req, res) => {
//   let { name = "anonymous" } = req.cookies;
//   res.send(`Hii, ${name}`);
// });

// app.get("/", (req, res) => {
//   console.log(req.cookies);
//   res.send("Hi, I am root!!");
// });

// // using the users path
// app.use("/users", users);

// // usign the Posts path
// app.use("/posts", posts);

app.listen(3000, () => {
  console.log("server is listening to port 3000.");
});
