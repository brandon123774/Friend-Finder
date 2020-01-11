//Load data 
var path = require("path")
var friends = require("../data/friends.js");
console.log(friends);

//exports
module.exports = function (app) {

    //api GET request with console log to see 
    app.get("/api/friends", function (req, res) {
        res.json(friends);
        console.log("friend[0].scores[0]:" + friends[0].scores[0]);
    });

    //api POST request
    app.post("/api/friends", function (req, res) {
        console.log(req.body);
        // setup the array hoding the user's answers
        var surveyResults = req.body.scores;
        // convert the values in surveyResults to integer values
        for (var i = 0; i < surveyResults.length; i++) {
            surveyResults[i] = parseInt(surveyResults[i]);
        }
        //create variables to show the difference in the friends array and then another variable for the best match possible
        var friendDifference = 999;
        var bestMatch = 0;

        //iterate through the friends array to get the selection and then show the best match available
        for (i = 0; i < friends.length; i++) {
            var theDifference = difference(surveyResults, friends[i].scores);
            if (theDifference < friendDifference) {
                friendDifference = theDifference;
                bestMatch = i;
            }
        }
            function difference(array1, array2) {

                // differenceAmount holds the tally of the difference between array values
                var differenceAmount = 0;

                for (var i = 0; i < array1.length; i++) {
                    differenceAmount += Math.abs(array1[i] - array2[i]);
                }

                // return the difference between the two arrays reflecting the deviation
                return differenceAmount;
            }

            // send the bestMatch back to the html page in response to the post
            res.send(friends[bestMatch]);
        });
};
