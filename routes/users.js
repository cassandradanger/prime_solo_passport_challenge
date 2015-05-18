var express = require('express');
var router = express.Router();
var Users = require('../models/user');

/* GET users listing. */
//router.get('/', function(req, res, next) {
//  res.send('respond with a resource');
//});

router.get('/', function(req, res, next){
  if(req.isAuthenticated()){
    Users.find({}, 'username', function(err, data){
      res.json(data);
    });
      }
});

module.exports = router;
