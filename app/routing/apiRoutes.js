// Link to friend.js data source
var friends = require("../data/friend.js");

// Routing
module.exports = function(app) {
    // API GET request route
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST request route
    api.post("/api/friends", function(req, res) {
        // Variable to hold new friend's scores
        var newScores = req.body.scores;

        // Variable to hold scores difference of every friend entered
        var allDiffScores = [];

        // For loop to go through every friend in friends
        for (var i = 0; i < friends.length; i++) {
            // Variable to hold differences in scores
            var diffScores;

            // 2nd for loop that will go through each friend's scores
            for (var j = 0; j < newScores.length; j++) {
                // diffScores will add up from its previous total to the absolute value of difference in new friend's score against friend i's scores
                diffScores += Math.abs(friends[i].scores[j] - newScores[j])
            }

            // Push the new diffScores into allDiffScores array
            allDiffScores.push(diffScores);
        };


    });
};