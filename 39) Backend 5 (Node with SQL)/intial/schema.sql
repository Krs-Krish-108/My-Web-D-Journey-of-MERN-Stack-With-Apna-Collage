create table users(
    id varchar(50) primary key,
    name varchar(30) not null,
    email varchar(50) unique not null,
    password varchar(30) not null
);