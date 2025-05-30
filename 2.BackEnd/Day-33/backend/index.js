const express = require("express");
const app = express();
const port = 8080;

app.use(express.urlencoded({extended: true}));

//get response
app.get("/register", (req, res)=>{

    //the data is in query of req object. so in order to access it we need to go to req.query .
    let {user, password} = req.query;
    res.send(`standard GET response, Welcome ${user}`);
});

//psot response
app.post("/register", (req, res)=>{

    //in the post request the is lies in the body so here we need to go to the req.body .
    // console.log(req.body); 
    let {user, password} = req.body;
    res.send(`standard POST response, Welcome ${user}`);
});

app.listen(port, ()=>{
    console.log(`listening to port ${port}`);
});