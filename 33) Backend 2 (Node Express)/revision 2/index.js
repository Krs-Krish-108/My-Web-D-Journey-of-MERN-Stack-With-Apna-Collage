const express = require("express");
const app = express();

// console.dir(app);

let port = 3000;

app.listen(port, ()=>{
    console.log(`app is listening on port ${port}`);
});

// app.use((req, res)=>{
//     console.log("request received");
//     let code = ("<br><h1>Express</h1><ul><li>listen menthod</li><li>use menthod</li><li>port</li><li>sending response</li><li>receiving request</li></ul>");
//     res.send(code);
// });

app.get("/", (req, res)=>{
    console.log("we received a request");
    res.send("we received a request at root address");
})

// app.get("/apple", (req, res)=>{
//     console.log("we received a request");
//     res.send("we received a request at apple address");
// })

// app.get("/banana", (req, res)=>{
//     console.log("we received a request");
//     res.send("we received a request at banana address");
// })

// app.post("/cherry", (req, res)=>{
//     console.log("we received a request");
//     res.send("we received a request at cherry address");
// })

// app.post("/date", (req, res)=>{
//     console.log("we received a request");
//     res.send("we received a request at date address");
// })

// app.get(/.*/, (req, res)=>{
//     console.log("we received a request");
//     res.send("we received a request at unknown address");
// })


//= path parameters
app.get("/:address/:id", (req, res)=>{
    let {address, id}= req.params;
    console.log(`we receive a request`)
    console.log(req.params);
    // res.send(`welcome to page of @${address}`);
    let htmlstr = `<h1>welcome to the page of @${address}</h1>`;
    res.send(htmlstr)
});