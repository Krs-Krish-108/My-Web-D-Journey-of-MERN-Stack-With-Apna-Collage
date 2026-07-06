CREATE DATABASE COLLEGE;
use college;

create table students(
rollno INT,
name VARCHAR(30),
age INT
);

insert into students
value
(61, "ayush",21),
(125,"Krish",23);

select * from students;
