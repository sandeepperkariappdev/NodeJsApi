var mongoose = require("mongoose");
//connect to a database so the below will work 
//mongoose.createConnection("mongodb://localhost/nodeapi2");
var Schema = mongoose.Schema;

var UserSchema =  new Schema({
    username:{
        type:String,
        required:true,
        unique:true
    }
    
});

module.exports = mongoose.model("user", UserSchema);
