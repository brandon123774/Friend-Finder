//add in any dependencies
var path = require("path");

//routes

module.exports = function(app) {
// HTMl GET requests 
  app.get("/friends", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/survey.html"));
  });


  // If no matching route is found default to home
  app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname, "../public/home.html"));
  });
};
