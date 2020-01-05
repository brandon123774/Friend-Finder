//Load data 
var friends = require("../data/friends.js");

//Routes

module.exports = function(app) {

//api GET request
  app.get("/api/friends", function(req, res) {
    res.json(tableData);
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
