// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");
var mysql = require('mysql');

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Reservations (DATA)
// =============================================================

var tables = [];
var waitlist = [];

// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/tables", function(req, res) {
    res.json(tables);
    
    // connection.query(
    //     "SELECT * FROM tables", function(err,res){
    //         if (err) throw err;
    //         res.json(res);
    //     }
    // )
});

app.get("/api/waitlist", function(req,res){
    res.json(waitlist);
    // connection.query(
    //     "SELECT * FROM waitlist", function(err,res){
    //         if (err) throw err;
    //         res.json(res);
    //     }
    // )
}
);

// Create New Reservation - takes in JSON input
app.post("/reserve", function(req, res) {
  // req.body hosts is equal to the JSON post sent from the user
  // This works because of our body-parser middleware
  var newCustomer = req.body;
  
  if (tables.length < 5){
      tables.push(newCustomer);
  }
  else{
      waitlist.push(newCustomer);
  }
});

app.delete("/")

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
