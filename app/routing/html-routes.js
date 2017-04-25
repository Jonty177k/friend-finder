var app = require("./server.js");

//html routing 

app.use(express.static(__dirname+'/app/public'));

app.get("/", function(req, res) {
	res.sendFile( __dirname + "/app/public/home.html");
});

app.get("/survey", function(req, res) {
	res.sendFile( __dirname + "/app/public/survey.html");
});

