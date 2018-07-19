var mongoose = require('mongoose')
var Schema = mongoose.Schema

var commentSchema = new Schema({
  comment: {type: String, ref: 'Blog'},
  name: {type: String, ref: 'User'},
  posted: {type: mongoose.Schema.Types.ObjectId, ref: 'Blog'}
})

var Comments = mongoose.model('Comments', commentSchema)
module.exports = Comments
