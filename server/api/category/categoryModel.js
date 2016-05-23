var mongoose = require("mongoose");

//connect to a database so the below will work 
//mongoose.createConnection("mongodb://localhost/nodeapi2");

//
//db.on('error', console.error.bind(console, 'connection error: '));
//db.once('open', function () {
//
//  var testA = new Test({ timestamp: Date() });
//
//});
//db.on('open', function () {
//
//  var testA = new Test({ timestamp: Date() });
//
//});
//mongoose.disconnect(function () {
//                db = null;
//                console.log("All connections closed.");
//                done();
//            });


var Schema = mongoose.Schema;

var CategorySchema = new Schema({
    name:{
        type:String,
        required:true,
        unique:true
    }
});

module.exports = mongoose.model("category", CategorySchema);
