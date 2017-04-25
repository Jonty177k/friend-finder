// node stuff
var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");

//--------------------------------------------

var app = express();
var PORT = 3000;

//--------------------------------------------

app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

//--------------------------------------------
//html routes!
//--------------------------------------------

app.use(express.static(__dirname + '/app/public'));

app.get("/", function(req, res) {
	res.sendFile( __dirname + "/app/public/home.html");
});

app.get("/survey", function(req, res) {
	res.sendFile( __dirname + "/app/public/survey.html");
});

//--------------------------------------------
//api routes!
//--------------------------------------------

app.get("/api/friends", function(req, res) {
	res.render( __dirname + "/app/data/friend.js");
});

app.post("/api/friends", function(req, res) {
	res.
});




