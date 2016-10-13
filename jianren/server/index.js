var express = require ('express');
var mongoose = require ('mongoose');
var app = express();
var Post = require('./models/post');

mongoose.connect('mongodb://localhost:27017/ppp');

var db = mongoose.connection;

db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});
app.post('/posts',function(req,res){
  console.log('run post.save()');
  var post = new Post ({title:'111111111',content:2222222})
  post.save(function(err){
    if (err) return console.log(err);
    console.log('saved')
  })
})

app.listen(3000,
  function(){console.log('server runing on port 3000')
})
