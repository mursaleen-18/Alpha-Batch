const express = require("express");
const app = express();

// console.dir(app);

let port = 8080;

app.listen(port, () => {
  console.log(`app is listening on port ${port}`);
});


// Using app.use() method
//this is a middleware function, it will run for every request.
// app.use((req, res)=>{      
// console.log(req); //this prints the request object
// console.log(res); //this prints the response object
// console.log("request reveived");
// res.send("this is a basic response");

// now try sending an object as response.
// res.send({
//     name: "apple",
//     color: "red",
// });

// //now sending html elements as response.
// let code = "<h1>Fruits</h1> <ul><li>apple</li><li>orange</li></ul>";
// res.send(code);
// });

// now using app.get() method to send response to the client.
app.get("/", (req, res) => {
  res.send("Hellow I am root directory");
});

// app.get("/about", (req,res)=>{
//   res.send("I am about page");
// });


//if the path does not match any of the above paths, then this will execute.
// app.get("*", (req,res)=>{ 
//   res.send("this path does not exist");
// });

// app.get("/:username", (req, res)=>{
//     console.log(req.params);
//     let { username} = req.params;
//     let code = `<h1>Welcome to the page of @${username}.</h1>`
//     res.send(code);
// });

// app.get("/contact", (req, res) => {
//   res.send("you are at the contact page");
// });
// app.get("/help", (req, res) => {
//   res.send("you are at the help page");
// });
// app.get("/about", (req, res) => {
//   res.send("you are at the about page");
// });

//for wrong path
// app.get("*", (req, res) => {
//   res.send("this path does not exist");
// });

//making new path for search
app.get("/search", (req, res) =>{
    // console.log(req.query);
    // res.send("no result"); 
    let {q} = req.query;
    res.send(`you searched for ${q}`);
    if(!q){
        res.send("no result");
    }
});

//sending a post request
app.post("/", (req, res) => {
  res.send("you sent a post request");
});

//sending a put request
app.put("/", (req, res) =>{
  res.send("you sent a put request");
});

//sending a delete request
app.delete("/", (req, res) =>{
  res.send("you sent a delete request");
});

//sending a patch request
app.patch("/", (req,res) =>{
  res.send("you sent a patch request");
});

app.get("/search", (req, res)=>{
    console.log(req.query);
    res.send("no result");
}) ;