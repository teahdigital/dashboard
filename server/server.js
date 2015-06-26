var express  	= require("express"),
    app      	= express(),
    http     	= require("http"),
    server   	= http.createServer(app),
    mongoose 	= require('mongoose'),
	bodyParser 	= require('body-parser');

app.use(bodyParser.urlencoded({extended: true}));

mongoose.connect('mongodb://localhost/projects', function(err, res) {
  if(err) {
    console.log('ERROR: connecting to Database. ' + err);
  } else {
    console.log('Connected to Database');
  }
});

app.get('/', function (req, res) {
	res.send("hola mundo");
});

require('./routes')(app);

server.listen(8000, function() {
  console.log("Node server running on 8000");
});