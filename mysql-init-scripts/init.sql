DROP DATABASE `hidrosolcm`;

CREATE DATABASE `hidrosolcm`;
USE `hidrosolcm`;
CREATE TABLE `logs`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `logDate` varchar (100) NOT NULL,
  `stack` varchar (2000) DEFAULT NULL,
  `message` varchar (1000) DEFAULT NULL,
  KEY `id`
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=26 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- hidrosolcm.product definition

CREATE TABLE `product`
(
  `id` int NOT NULL AUTO_INCREMENT,
  `storeCode` varchar (10) DEFAULT NULL,
  `description` varchar (500) NOT NULL,
  `altText` varchar (500) NOT NULL,
  `imagePath` varchar (1000) DEFAULT NULL,
  `name` varchar (100) DEFAULT NULL,
  `category` varchar (100) NOT NULL,
  `updated` bit (1) DEFAULT NULL,
  KEY `id`
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=526 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


-- hidrosolcm.users definition

CREATE TABLE `users`
(
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `NAME` varchar (200) NOT NULL,
  `EMAIL` varchar (200) NOT NULL,
  `PASSWORD` varchar (200) NOT NULL,
  `admin` bit (1) DEFAULT NULL,
  KEY `id`
(`id`)
) ENGINE=InnoDB AUTO_INCREMENT=1030 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;


