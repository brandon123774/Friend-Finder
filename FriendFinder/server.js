//dependencies used/needed

var express = require("express");

// use the express server
var app = express();

// initial port 
var PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// require the hmtl and api routes
require("./routes/apiRoutes")(app);
require("./routes/htmlRoutes")(app);

// var apiRoutes = require("./routes/apiRoutes")
// console.log(apiRoutes); //=> [Function]
// apiRoutes(app);

//set up the listen function to start up the server

app.listen(PORT, function() {
  console.log("App listening on PORT: " + PORT);
});
