var express = require("express");
var app = express();
var api = require("./api/api");// this is a router
var err = require("./middleware/globalErrHandler");

require("mongoose").connect("mongodb://localhost/nodeapi2"); //config.db.url

require("./util/seed");

require("./middleware/appMiddleware")(app);

//setup the api
app.use("/api", api);
app.use("/auth", auth);

//app.use("/api/",api);

//set up global error handling
app.use(err());
/*
app.listen("3400",function(){
    console.log("Server running on http://localhost:3400");
});
*/
module.exports = app;