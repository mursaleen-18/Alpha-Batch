const express = require("express");
const router = express.Router();

//  routes for users
// Index - users
router.get("/", (req, res) => {
  res.send("GET for users");
});
// show - users
router.get("/:id", (req, res) => {
  res.send("GET for users ID");
});
// post  - users
router.post("/:id", (req, res) => {
  res.send("POST for  users");
});
// delete  - users
router.delete("/:id", (req, res) => {
  res.send("DELETE for  users id");
});

module.exports = router;