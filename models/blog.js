var mongoose = require('mongoose')
var Schema = mongoose.Schema
var moment = require('moment')

var blogSchema = new Schema({
  title: { type: String, required: true },
  update: {type: Date, default: Date.now},
  description: {type: String},
  postedBy: {type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  name: {type: String, ref: 'User'}
})

blogSchema
  .virtual('updateModified')
  .get(function () {
    return moment(this.update).format('MMMM Do YYYY')
  })

blogSchema
  .virtual('dateModified')
  .get(function () {
    return moment(this.date).format('MMMM Do YYYY')
  })

blogSchema
  .virtual('capsubject')
  .get(function () {
    return this.subject.toUpperCase()
  })

var Blog = mongoose.model('Blog', blogSchema)
module.exports = Blog
