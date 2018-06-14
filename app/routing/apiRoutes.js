// Linking to friend.js data source
var friends = require("../data/friend.js");

// Routing
module.exports = function(app) {
    // API GET request route
    app.get("/api/friends", function(req, res) {
        res.json(friends);
    });

    // API POST request route
    app.post("/api/friends", function(req, res) {
        // Variable to hold new friend's scores
        var newScores = req.body.scores;

        // Variable to hold scores difference of every friend entered
        var allDiffScores = [];

        // Variable to hold the best match number (to use in the friends array)
        var lowestScore = 0;

        // For loop to go through every friend in friends
        for (var i = 0; i < friends.length; i++) {
            // Variable to hold differences in scores
            var diffScores = 0;

            // 2nd for loop that will go through each friend's scores
            for (var j = 0; j < newScores.length; j++) {
                // diffScores will add up from its previous total to the absolute value of difference in new friend's score against friend i's scores          
                diffScores += Math.abs(parseInt(friends[i].scores[j]) - parseInt(newScores[j]))
            };

            // Pushing the new diffScores into allDiffScores array
            allDiffScores.push(diffScores);
        };

        // Comparing all friends to find the best match
        for (var k = 0; k < allDiffScores.length; k++) {
            // If the kth difference is less than or equal to the current lowest difference
            if (allDiffScores[k] <= allDiffScores[lowestScore]) {
                // Having k become the new lowestScore
                lowestScore = k;
            };
        };

        // Returning a friend with the lowestScore
        var lowestScoreFriend = friends[lowestScore];
        res.json(lowestScoreFriend);

        // Pushing the new friend into the friends array as well
        friends.push(req.body);
    });
};