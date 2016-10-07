var bodyParser = require ('body-parser');
var express = require ('express');
var app = express();
app.use(bodyParser.json());
app.post('/posts',function(req,res){
	console.log(req.body);
});

app.listen(3001,function(){
console.log('runing on 3001 ~!')
});
