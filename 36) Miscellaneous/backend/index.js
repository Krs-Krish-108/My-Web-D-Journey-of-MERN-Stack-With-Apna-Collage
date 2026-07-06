const express = require("express");
const app = express();
const path = require("path");

const port = 3000;


// middleware to read the body of the request that is sent by the client, and to parse it as JSON or URL-encoded data, depending on the content type of the request.
app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/register", (req, res) => {
    let { username, password } = req.query;
    res.send(`standard GET response, Welcome ${username}`);
});

app.post("/register", (req, res) => {
    console.log("Request body:", req.body);
    console.log("Content-Type:", req.headers['content-type']);
    let { Name, password } = req.body;
    res.send(`standard POST response, Welcome ${Name}`);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});