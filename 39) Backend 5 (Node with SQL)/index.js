import { faker } from '@faker-js/faker';
import mysql from "mysql2";
import path from "path";
import { fileURLToPath } from 'url';
import {v4 as uuidv4} from "uuid";
import express from "express";
const app = express();
const port = 8080;

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set("views engine", "ejs");
app.set("views", path.join(__dirname, "/views"));



const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "jaishreekrishn@108",
  database: "delta_app",
});



//: Inserting new data in database manually
// const q = "insert into USERS (id, name, email, password) values ?";
// let user1 = [1, "krish", "krish@123", "ram@123"];

// let users =[[2, "devansh", "devansh@123", "hanuman@123"], [3, "kirti", "kirti@123c", "shiv@123c"]];



//: Inserting new data in database manually
let userdata = ()=>{
  return [
    faker.string.uuid(),
    faker.internet.username(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};


// const q = "insert into USERS (id, name, email, password) values ?";
// let data= [];
// for(let i=1; i<10; i++){
//     data.push(userdata());  
// };


// connection.query(q, [data], (err, result)=>{
//     if (err) {
//         console.error(err);
//         return;
//     }
//     console.log(result);
// });

// connection.end();


app.get('/', (req, res)=>{
  let q = "SELECT count(*) from users";
  connection.query(q, (err, result)=>{
    if(err){
      console.error(err);
      return;
    }
    let count = result[0]['count(*)'];
    console.log(result[0]['count(*)']);
    res.render("home.ejs", {count});
  });
});


app.get('/users', (req, res)=>{
  let q = "SELECT count(*) from users";
  console.log('this route is working fine');
  res.send();
  
});


app.listen(port, ()=>{
  console.log(`Server is listing on port ${port}`);
});