var User = require("./userModel");
var _ = require("lodash");


exports.params = function(req, res, next, id){
    
    User.findById(id).then(function(user){
        if(!user){
            next(new Error("No user with that id"));
        } else {
            req.user = user;
            next();
        }
    }, function(err){
        next(err);  
    });
};


exports.get = function(req, res, next){
    
    console.log("users get request");
    User.find({}).then(function(users){
        console.log("users get request 2");
       if(!users){
           next(new Error("users get incorrect data"));
       } else {
           res.json(users);
       }
    }, function(err){
        next(err);
    });
};

exports.getOne = function(req, res, next){
    var user = req.user;
    res.json(user);
}

exports.put = function(req, res, next){
    var user = req.user;// we go this from exports.params
    var update = req.body;
    
    _.merge(user, update);
    
    user.save(function(err, saved){
       if(err){
           next(err);           
       } else {
           res.json(saved);
       }
    });        
};

exports.post = function(req, res, next){
    var newpost = req.body;
    User.create(newpost).then(function(category){
       res.json(category); 
    }, function(err){
        next(err);
    });
};

exports.delete = function(req, res, next){
  req.user.remove(function(err, removed){
      if(err){
          next(err);
      } else {
          res.json(removed);
      }
  });  
};