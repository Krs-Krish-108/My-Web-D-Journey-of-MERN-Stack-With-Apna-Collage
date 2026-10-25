const express = require("express");
const app = express();

let port = 3000;

app.listen(port, ()=>{
    console.log(`Server is listening on port ${port}`); 
});

app.get("/", (req, res)=>{
    console.log('We received a request at root path');
    res.send("You contacted the root path");
});

// app.get("/apple", (req, res)=>{
//     console.log('We received a request at apple path');
//     res.send("You contacted the apple path");
// });

// app.get("/*splat", (req, res)=>{
//     console.log('We received a request on an unknown path');
//     res.send("You contacted the apple path");
// });

// app.use((req, res)=>{
//     console.log("request received");
//     res.send("We received your request");
// });


app.get("/:username/:id", (req,res)=>{
    // console.log(req.params);
    let {username, id}= req.params;
    res.send(`This is the page of ${username}`);

});
