const express = require("express")

const app = express();

app.get("/", (req,res)=>{
    res.send("Success")
    // res.sendStatus(210)
})
//http://localhost:4001  (always set http method)

app.post("/addUser", (req,res)=>{
    console.log(req.query);
    res.send("Query")
})

// http://0.0.0.0:4001/addUser?name=lalsa&age=22&designation=HR

app.put("/editUser/:id", (req,res)=>{
    console.log(req.params);
    res.send("Params")
})
//http://0.0.0.0:4001/editUser/12

app.listen(4001);


// sending the data
//Query params :   (JSON format) (when we want to send multiple values so in that case value will be send in key value pairs)
// URL params : 12  single value    (normal value)