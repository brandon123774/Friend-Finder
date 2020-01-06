//Load data 
var path = require("path")
var friends = require("../data/friends.js");
console.log(friends);

//exports
module.exports = function(app) {

//api GET request with console log to see 
  app.get("/api/friends", function(req, res) {
    res.json(friends);
    console.log("friend[0].scores[0]:" + friends[0].scores[0]);
  });

  //api POST request
//   app.post("/api/friends", function(req, res) {
  
//     if (friends.length < 5) {
//       tableData.push(req.body);
//       res.json(true);
//     }
//     else {
//       waitListData.push(req.body);
//       res.json(false);
//     }
//   });


//api PUT request to clear the data if necessary
  app.put("/api/clear", function(req, res) {
    // Empty out the arrays of data
    tableData.length = [];
    waitListData.length = [];

    res.json({ ok: true });
  });
};
