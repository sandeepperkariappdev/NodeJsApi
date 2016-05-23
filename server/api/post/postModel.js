var mongoose = require("mongoose");
//connect to a database so the below will work 
//mongoose.createConnection("mongodb://localhost/nodeapi2");
var Schema = mongoose.Schema;

var PostSchema = new Schema({
    title:{
        type:String,
        required:true,
        unique:true
    },
    text:{
        type:String,
        required:true
    },
    author:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:"user"
    },
    categories:[
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref:"category"
        }
    ]
});

module.exports = mongoose.model("post", PostSchema);
