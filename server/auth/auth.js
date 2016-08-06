var jwt = require("jsonwebtoken");// to get jwt tokwn from oauth
var expressJwt = require("express-jwt");// verifies JTokens makes jwt work
var config = require("../config/config");
var checkToken = expressJwt({secret:config.secrets.jwt}); // returns middleware function
var User = require("../api/user/userModel");

exports.decodeToken = function(){
  return function(req, res, next){
      
      if(req.query && req.query.hasOwnProperty("access_token")){
          req.headers.authorization = "" + req.query.access_token;
      }
      checkToken(req, res, next);
  };        
};

exports.getFreshUser = function(){
    return function(req, res, next){
        
    }
};

exports.verifyUser = function(){
  return function(req, res, next){
      var username = req.body.username;
      var password = req.body.password;
      
  }  
};

exports.signToken = function(id){
    return jwt.sign(
        {_id:id},
        config.secrets.jwt,
        {expiresInMinutes:config.expireTime}
    );
};
