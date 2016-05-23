var Category = require("./categoryModel");
var _ = require("lodash");

exports.params = function(req, res, next, id){
    Category.findById(id).then(function(category){
        if(!category){
            next(new Error("No Category with that id"));
        } else {
            //saved the category in the req
            req.category = category;
            next();
        }
    }, function(err){
        next(err);  
    });
};

exports.get = function(req, res, next){
    Category.find({}).then(function(categories){
        res.json(categories)
    }, function(err){
        next(err);
    });
};

exports.getOne = function(req, res, next){
   var category = req.category;
    res.json(category);
};

exports.put = function(req, res, next){
    var category = req.category;// we go this from exports.params
    var update = req.body;
    
    _.merge(category, update);
    
    category.save(function(err, saved){
       if(err){
           next(err);           
       } else {
           res.json(saved);
       }
    });        
};
exports.post = function(req, res, next){
    var newpost = req.body;
    Category.create(newpost).then(function(category){
       res.json(category); 
    }, function(err){
        next(err);
    });
};
exports.delete = function(req, res, next){
  req.category.remove(function(err, removed){
      if(err){
          next(err);
      } else {
          res.json(removed);
      }
  });  
};