CREATE DATABASE IF NOT EXISTS companydb;

show databases;

CREATE TABLE employee(
id INT(11) NOT NULL AUTO_INCREMENT,
name VARCHAR(45) DEFAULT NULL,
salary int(5) DEFAULT NULL,
primary key(id)
);
 
 show tables;
 describe employee;

 INSERT INTO employee(name, salary)
 VALUES (1, "Joe", 1000),
 (2, "Joe", 1000),
 (3, "Owen", 1000),
 (4, "Tatiana", 1000);

 --1 hora, eliminado empleado
 --thunder client -- open -ctrl + shift + r