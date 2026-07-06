const express = require('express');
const app = express();
const path = require("path");

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});


//by writting "public" inside "express.static", we do not to specify the /public folder everytime to access the files in it, they are directly available to our ejs.
app.use(express.static(path.join(__dirname, "/public/css")));
app.use(express.static(path.join(__dirname, "/public/js")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "/views"));

app.get("/",(req,res)=>{
  // res.send("this is home");
  let diceval = Math.floor(Math.random()*6 +1);
  res.render("home.ejs", {diceval});
});

app.get("/ig/:username", (req,res)=>{
  const instadata = require("./data.json");
  // let followers = ["krish", "kirti", "parkar", "lav", "mahima", "madhu"]
  let {username}=req.params;
  const data = instadata[username];
  if(data){
    res.render("instagram.ejs", { data });
  } else{
    res.render("error.ejs");
  }
});

app.get("/hello",(req,res)=>{
  // res.send("this is home");
  res.send("this is home");
});



