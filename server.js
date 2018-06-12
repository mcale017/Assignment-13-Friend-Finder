// npm dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// app now refers to express
var app = express();

// Allowing express to access the port at 3000 if it isn't already
var PORT = process.env.PORT || 3000;

// Express handling data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routing
require("./app/routing/htmlRoutes")(app);
require("./app/routing/apiRoutes")(app);

// Listening to the server
app.listen(PORT, function() {
    console.log("App listening on Port: " + PORT);
});