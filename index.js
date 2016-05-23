var config = require("./server/config/config");
var app = require("./server/server.js")
var logger = require("./server/util/logger");
//console.log(app);
//app.listen("3400", function(err){
//    console.log(err);
//});
//logger.log("Listening on http://localhost" + 3400);


//var app = require('./server/server-updated.js');
//
app.listen("3400",function(){
    console.log("Server running on http://localhost:3400");
});