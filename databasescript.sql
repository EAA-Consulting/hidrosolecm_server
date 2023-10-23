CREATE TABLE logs (
  id int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  logDate varchar(100) NOT NULL,
  stack varchar(2000) DEFAULT NULL,
  message varchar(1000) DEFAULT NULL
 )
 
 CREATE TABLE product (
  id int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  storeCode varchar(10) DEFAULT NULL,
  description varchar(500) NOT NULL,
  altText varchar(500) NOT NULL,
  imagePath varchar(1000) DEFAULT NULL,
  name varchar(100) DEFAULT NULL,
  category varchar(100) NOT NULL,
  updated int DEFAULT NULL
  )
  
  CREATE TABLE users (
  id int GENERATED BY DEFAULT AS IDENTITY NOT NULL,
  NAME varchar(200) NOT NULL,
  EMAIL varchar(200) NOT NULL,
  PASSWORD varchar(200) NOT NULL,
  "admin" int DEFAULT NULL
  )