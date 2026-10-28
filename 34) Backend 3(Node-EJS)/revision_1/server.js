const express = require("express");
const app = express();
const path = require("path");

let port = 8080;

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/", (req, res)=>{
    res.render("home.ejs");
});

app.get("/ig/:username", (req, res)=>{
    let{username} = req.params;
    let followers=["abi","himanshu","krish","Khushi"];
    console.log(username);
    res.render("instagram.ejs", {username, followers});
});

app.get("/rolldice", (req, res)=>{
    let dicevalue=Math.floor(Math.random()*6)+1;
    res.render("rolldice.ejs", {dicevalue});
});

app.get("/hello", (req, res)=>{
    res.send('Hello buddy!!!');
});

app.listen(port, ()=>{
    console.log(`Server listening at port ${port}`);
});