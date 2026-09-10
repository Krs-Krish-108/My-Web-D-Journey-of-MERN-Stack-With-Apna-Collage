const express = require("express");
const app = express();

// console.dir(app);
// console.log(typeof(express));

const port = 8080;


//! it creates a web server
//* when the server start an event loop-driven process, it constantly listens for the upcoming request indefinitely in a loop
//* the server won't stop on its own, we have to manually stop it by pressing ``ctrl + c`` in the terminal
app.listen(port,() => {
    console.log(`the app is listening on ${port}`);
})


//! app.use registers a middleware
//* it intercepts and processes the incoming request --- gets the first control ---- can decide which request to forward ----- and can even block the request entirely 
//* simple acts likes a security gaurd
// app.use((req,res) =>{
//     // console.log(req);
//     console.log("request recieved");
//     let apple = "<h1>fruits</h1><ul><li>mango</li><li>banana</li></ul>"
//     res.send(apple);
// })


//! app.get() is a route handler
//*  after the middleware, it matches the GET request for the specific path and sends a response once the path is reached
app.get("/",(req, res)=>{
    console.log("you got a request at root path");
    res.send("you contacted the root path");
})
// app.get("/apple",(req, res)=>{
//     console.log("you got a request at apple path");
//     res.send("you contacted the apple path");
// })
// app.get("/banana",(req, res)=>{
//     console.log("you got a request at banana path");
//     res.send("you contacted the banana path");
// })
// app.get("/mango",(req, res)=>{
//     console.log("you got a request at mango path");
//     res.send("you contacted the mango path");
// })
// app.post("/",(req, res)=>{
//     console.log("you got a POST request from root path");
//     res.send("you contacted the root path");
// })
// app.use((req, res)=>{
//     console.log("you got a request from  an undefined path");
//     res.send("you have contacted to an undefined path");
// })


//! FACT
//todo In the previous version of express app.get('*',....) handled all requests whose path are not specfically defined but not it has been removed in ``express(V5+)``


//! path parameters
//* these are dynamic segments of url that allows express to capture values directly form url and expose them using req.params
app.get("/:username/:id",(req, res)=>{
    let {username, id} = req.params;
    let code = `<h1>welcome to page of ${username}</h1>`
    res.send(code);
})



//! query parameters
//* 
app.get("/search", (req,res)=>{
    let {q} = req.query;
    console.log(typeof(q));
    console.log("you got a query request");
    console.log(req.query);
    console.log(q);
    res.send(`<h1>this is the result for search query:${q}</h1>`);
})
