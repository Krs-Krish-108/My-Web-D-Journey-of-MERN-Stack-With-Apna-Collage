import { faker } from '@faker-js/faker';
import mysql from "mysql2";

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


const q = "insert into USERS (id, name, email, password) values ?";
let data= [];
for(let i=1; i<10; i++){
    data.push(userdata());  
};


connection.query(q, [data], (err, result)=>{
    if (err) {
        console.error(err);
        return;
    }
    console.log(result);
});

connection.end();



// console.log(getRandomUser());