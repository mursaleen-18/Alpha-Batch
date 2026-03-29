const express = require("express");
const app = express();

// this code executes before any of the roots so are actually not even visiting the roots that we have defined below
// app.use((req, res, next)=>{
//     console.log("Hi, I am 1st middleware");
//     // now this middleware will stop the entire page to function because this middleware is only sending a response to the request and doing nothing after that
//     next();
// });

// 2nd middleware
// app.use((req, res, next)=>{
//     console.log("Hi, I am 2nd Middleware");
//     next();
// })

// creating a middleware for the random path only
app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

// creating middleware that cheks for the access token
const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  res.send("ACCESS DENIED!");
};

// creating new meddleware for an api that checks if access token was passed in the query string
app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

// handling errors
app.get("/wrong", (req, res) => {
  abcd = abcd;
});

// ==================================================================
// creating utility middleware. (logger)
// morgan is an npm package that does the same job as the below code.
app.use((req, res, next) => {
  req.time = new Date(Date.now()).toString(); // to convert this date in human readable format.
  // console.log(req); //this prints the entire req object.
  console.log(req.method, req.hostname, req.path, req.time);
  next();
});

app.get("/", (req, res) => {
  res.send("Hi, I am root");
});

app.get("/random", (req, res) => {
  res.send("this is random page");
});

// creating the Page not found middleware if user try to access undefined path
app.use((req, res) => {
  res.status(404).send("Page not found!!");
});

app.listen(8080, () => {
  console.log("server listening to port 8080");
});
