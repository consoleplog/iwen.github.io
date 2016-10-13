var mongoose = require ('mongoose');
var Schema = mongoose.Schema;

var  PostSchema = new Schema({
 title:String,
content:Number
})

module.exports = mongoose.model('Post',PostSchema)
