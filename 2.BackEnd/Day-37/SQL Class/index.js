const { faker } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));
// Setting up EJS
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

// create the connection.
const conn = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "MySQL@8090",
});

// To get some random users.
let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// making query as a vairable
// let q = "SHOW TABLES";

// Inserting New Data
// let q = "INSERT INTO user ( id, username, email, password) VALUES ?";

// Now Inserting data in bulk. (100 users)
// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser());
// }

// let user = ["123", "123_newuser", "abc@gmail.com", "abc"]; already entered

// inserting multiple users data at once with array of arrays.
// let users = [
//   ["123b", "123_newuserb", "abc@gmail.comb", "abcb"],
//   ["123c", "123_newuserc", "abc@gmail.comc", "abcc"],
// ];

// let getRandomUser = () => {
//   return {
//     Id: faker.string.uuid(),
//     username: faker.internet.username(),
//     email: faker.internet.email(),
//     password: faker.internet.password(),
//   };
// };

// console.log(getRandomUser());

// Now we are going to use the same method as above but instead of returning an object we will return data as array.

// ===================================================================================================

// Routs  ( HOME Route)
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user;";
  // passing q as an argument
  conn.query(q, (err, result) => {
    if (err) {
      console.log(err);
      res.send("some error in DB");
      return;
    }
    // console.log(result[0]["count(*)"]);
    let count = result[0]["count(*)"];
    // res.send(result); // without using ejs
    res.render("home.ejs", { count });

    // console.log(result.length);
    // console.log(result[0]);
    // console.log(result[1]);
  });

  // conn.end();   No need of this function it will end the connection as soon as the app.get function completes.

  // res.send("Welcome to Home page");
});

// =================================================================
// Show users Route.
app.get("/user", (req, res) => {
  console.log("server is listening on port: 8080");
  let q = "SELECT * FROM user";

  conn.query(q, (err, users) => {
    if (err) {
      console.log(err);
      res.send("some error in DB");
      return;
    }
    // console.log(users);
    // res.send(users);
    res.render("showusers.ejs", { users });
  });
});

// ======================================================================
// Edit Route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`; // we have to put the id in quotes.
  conn.query(q, (err, result) => {
    if (err) {
      console.log(err);
      res.send("some error in DB");
      return;
    }
    console.log(result);
    let user = result[0];
    // res.send(result);
    res.render("edit.ejs", { user });
  });
  // console.log(id);
  // res.render("edit.ejs");
});

// =================================================================================
// UPDATE (DB) route.
app.patch("/user/:id/", (req, res) => {
  // res.send("updated");

  let { password: formPass, username: newUsername } = req.body;

  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id = '${id}'`; // we have to put the id in quotes.
  conn.query(q, (err, result) => {
    if (err) {
      console.log(err);
      res.send("some error in DB");
      return;
    }
    console.log(result);
    let user = result[0];
    if (formPass != user.password) {
      res.send("Wrong Password");
    } else {
      let q2 = `UPDATE user SET username = '${newUsername}' WHERE id = '${id}'`;
      conn.query(q2, (err, result) => {
        if(err) throw err;
        res.redirect("/user");
      });
    }
    // res.send(result);
    // res.render("edit.ejs", { user });
    // res.send(user);
  });
});

app.listen("8080", () => {
  console.log("server is litening to port 8080");
});
