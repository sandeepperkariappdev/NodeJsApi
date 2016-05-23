var mongoose = require("mongoose");
//connect to a database so the below will work 
mongoose.connect("mongodb://localhost/nodeapi2");

//what's happening is that we're creating a new schema and making a todos 
//collection and a Todo model. we then create new Todo, 
//So in the mongo shell in the terminal. 
//connect to your database and query it there and
//see if you see the todo below log in the terminal 
//run node db. Tester to execute this file MAKE SURE MONGOD IS RUNNING

var TodoSchema = new mongoose.Schema({
    name: String,
    completed:Boolean
});

var DogSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true//enforce that no two dogs can have the same name
        },
    whenAdopted:Date,
    hasShots:Boolean,
    collarCode:Buffer,
    age:{
        type:Number,
        min:0,// set up min and max
        max:30
    },
    toys:[],//toys is an array and can store many types of things really we can choose to model the things it stores or not.It can also store other schemas. we can put any of the above types or leaave it blank
    // nested objects work too
    location:{
        state:String,
        city:String,
        zip:Number
    },
    owner:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"owner",
        required:true
    }    
});

var todo = TodoSchema({
    name:"todo",
    completed:true
});

todo.save(function(err, savedtodo){
    if(err){
        next(err);
    } else{
        res.join(savedtodo);
    }
});

TodoSchema.create({name:"todo", completed:true}, function(err, savedtodo){
    
});

Model.findByIdAndUpdate("234213324454623", {name:"new name"}, function(err, updateddoc){
    if(err){
        next(err);
    } else{
        res.join(updateddoc);
    }
});


Model.findOne({name:"sdafwersa"}, function(err, doc){
    doc.remove(function(err, removedDoc){
        
    });
});

var Todo = mongoose.model("todo",TodoSchema);
/*
Todo.create({
    name:"clean up your room",
    completed:false
}).then(function(err, todo){
    console.log(err, todo);
});



var DogSchema = new mongoose.Schema({
    owner: {
        type: mongoose.Schema.Types.ObjectId,
        ref:"person"
    },
    name:String
});

var PersonSchema = new mongoose.Schema({
    name: String
});

var Dog = mongoose.model("dog", DogSchema);
var Person = mongoose.model("person", PersonSchema);

//find all dogs and populate their owners this will grab the ids on the owners fields and go to the ref, which is the person model and grab the person doc with the matching id and place the object on the owners field
var promise = Dog.find({}).populate("owner").exec();

promise.then(function(dogs){
    
});

*/
