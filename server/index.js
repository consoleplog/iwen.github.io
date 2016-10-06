var express = require('express');
var  app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// 关闭同源策略，开放 CORS
var cors = require ('cors');
app.use(cors());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }))

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/rest');


var Post = require('./models/post');

var db = mongoose.connection;
db.on('error', console.log);
db.once('open', function() {
  console.log('success!')
});


app.get('/posts', function(req, res) {
  Post.find().exec(function(err, posts) {
    res.json({ posts: posts})
  });
})

app.get('/post/:id', function(req, res) {
  Post.findOne({_id:req.params.id},function(err,doc){
    if(err) return res.send('wrong')
    res.json({post:doc})
  })
})

// app.delete('/psots/:id',function(req,res){
//   Post.findById({_id:req.params.id},function(err,del){
//     del.remove(function(err){
//       console.log('del')
//     })
//   })
// })

app.post('/posts/', function(req, res) {
  // res.send('the post title is: ' + req.body.title)
  var post = new Post({
    title:req.body.title,
    category:req.body.category,
    content:req.body.content
  });
  // for(var item in req.body){
  //   psot[item]=req.body[item]
  // }

  post.save(function(err){
    if(err) return console.log(err);
    console.log('saved!');
  })

  res.json({message:'chenggong'})
})



app.listen(3000, function() {
  console.log('running on port 3000')
})
