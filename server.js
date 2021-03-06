//dependencies used/needed

var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// use the express server
var app = express();

// initial port 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));

// require the hmtl and api routes
require("./app/routes/apiRoutes")(app);
require("./app/routes/htmlRoutes")(app);

// var apiRoutes = require("./routes/apiRoutes")
// console.log(apiRoutes); //=> [Function]
// apiRoutes(app);

//set up the listen function to start up the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
