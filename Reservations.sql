DROP DATABASE IF EXISTS tablesDB;
CREATE database tablesDB;

USE tablesDB;

CREATE TABLE tables (
  customerName VARCHAR(30),
  phoneNumber INT(10),
  customerEmail VARCHAR(40),
  customerID INT NOT NULL AUTO_INCREMENT,

  PRIMARY KEY(customerID)
);

CREATE TABLE waitlist (
   customerName VARCHAR(30),
  phoneNumber INT(10),
  customerEmail VARCHAR(40),
  customerID INT NOT NULL AUTO_INCREMENT,

  PRIMARY KEY(customerID)
); 


SELECT * FROM tables;


