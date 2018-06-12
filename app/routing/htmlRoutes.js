// Require npm path
var path = require("path");

module.exports = function(app) {
    // Defaulting to home.html
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname + "../public/home.html"));
    });

    // /survey goes to survey.html
    app.get("/survey", function(req, res) {
        res.sendFile(path.join(__dirname + "../public/survey.html"));
    });
};