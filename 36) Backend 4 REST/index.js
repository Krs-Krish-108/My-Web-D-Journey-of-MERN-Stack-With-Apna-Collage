import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { v4 as uuidv4 } from 'uuid';
import methodOverride from "method-override"
const app = express();
const port = 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(methodOverride('_method'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

app.use(express.static(path.join(__dirname, "public")));

let posts=[
    {
        id: uuidv4(),
        username :"Krish",
        content : "I m doing fine, what about you ?"
    },
    {
        id: uuidv4(),
        username :"Kirti",
        content : "I am tech enthusiat and I love sweets"
    },
    {
        id: uuidv4(),
        username :"Devansh",
        content : "Gamming meri jaan hai, and mera favourite game hai Genshin Imapact"
    }
]

app.get("/posts", (req, res) => {
    res.render("index.ejs",{posts});
});

app.get("/posts/new", (req, res)=>{
    res.render('new.ejs');
});

app.post("/posts", (req, res) => {
    let {username, content} = req.body;
    let id = uuidv4();
    posts.push({ id, username, content})
    res.redirect("/posts");
});

app.get('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let post = posts.find(p => p.id === id);
    if (!post) {
        return res.status(404).send("Post not found");
    }
    res.render("show.ejs", { post });
});

app.get('/posts/:id/edit', (req, res)=>{
    let {id} = req.params;
    let post = posts.find((p)=> id === p.id)
    res.render("edit.ejs", {post});
});

app.patch('/posts/:id', (req, res)=>{
    let {id} = req.params;
    let {newContent} = req.body;
    let post = posts.find((p)=> id ===p.id);
    post.content = newContent;
    res.redirect("/posts");    
});

app.delete("/posts/:id", (req, res)=>{
    let {id} = req.params;
    posts = posts.filter((p)=> id !== p.id);
    res.redirect("/posts");
});

app.listen(port, () => {
    console.log(`Server is listening at port ${port}`);
});
