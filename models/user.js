var mongoose = require('mongoose')
var Schema = mongoose.Schema
var bcrypt = require('bcrypt-nodejs')
var SALT_FACTOR = 10
var moment = require('moment')

var userSchema = new Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  displayName: { type: String },
  bio: String
})

userSchema
  .virtual('createdAtModified')
  .get(function () {
    return moment(this.createdAt).format('MMMM Do YYYY')
  })

// Hashing password

var noop = function () {}

userSchema.pre('save', function (next) {
  var user = this
  if (!user.isModified('password')) {
    return next
  }
  bcrypt.genSalt(SALT_FACTOR, function (err, salt) {
    if (err) return next(err)
    bcrypt.hash(user.password, salt, noop, function (err, hashedPass) {
      if (err) return next(err)
      user.password = hashedPass
      next()
    })
  })
})

// END

// Adding method to compare password

userSchema.methods.comparePassword = function (password) {
  var user = this
  return bcrypt.compareSync(password, user.password)
}

// END

module.exports = mongoose.model('User', userSchema)
