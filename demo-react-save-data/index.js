var express = require('express')
var app = express();
var Post = require('./models/post');
var mongoose = require ('mongoose');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/ooo');
var db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  var post = new Post({title: 'ssss',content:'bbbb'});
  post.save(function(err){
    if(err) console.log(err);
  })
  console.log('success!');
});
