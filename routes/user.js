// requiring modules and files
const express = require('express')
const router = express.Router()
const User = require('../models/user')
const Blog = require('../models/blog')
const Comments = require('../models/comments')
const jwt = require('jsonwebtoken')
const config = require('../config/config')
const passport = require('passport')

router.get('/', (req, res, next) => {
  res.send('Welcome user')
})

// Post register route
router.post('/register', (req, res, next) => {
  const username = escape(req.body.username)
  const email = escape(req.body.email)
  const password = escape(req.body.password)
  const confirmPassword = escape(req.body.confirmPassword)

  if (username.length <= 3 || username.length >= 12) {
    res.json({
      success: false,
      message: 'Username should be greater than 4 and less than 12 characters'
    })
    return next()
  }

  if (username === "undefined" || username === undefined ||
      email === "undefined" || email === undefined ||
      password === "undefined" || password === undefined) {
    res.json({
      success: false,
      message: 'Please fill all fields'
    })
    return next()
  }

  if (password !== confirmPassword) {
    res.json({
      success: false,
      message: 'Your passwords do not match'
    })
    return next()
  }
  if (password.length < 6) {
    res.json({
      success: false,
      message: 'Password should be greater than 6 characters'
    })
    return next()
  }

  // Checking for same User in database
  User.find({ '$or': [ { username: username }, { email: email } ] }, function (err, user) {
    if (err) return next(err)
    if (typeof user[0] !== 'undefined') {
      if (user[0].username === username) {
        res.json({
          success: false,
          message: 'Username already in use'
        })
        return next()
      } else if (user[0].email === email) {
        res.json({
          success: false,
          message: 'Email already in use'
        })
        return next()
      }
    }
    // If no user is found creating a new User
    user = new User({
      username: escape(req.body.username),
      password: escape(req.body.password),
      email: escape(req.body.email)
    })

    // Saving the new User to database and sending response
    user.save(function (err) {
      if (err) return next(err)
      res.json({
        success: true,
        message: 'User Created'
      })
    })
  })
})

// This is authenticating route
router.post('/authenticate', (req, res, next) => {
  const username = escape(req.body.username)
  const password = escape(req.body.password)
  User.findOne({username: username}, function (err, user) {
    if (err) return next(err)
    if (!user) {
      res.json({
        success: false,
        message: 'No user found'
      })
    } else if (user) {
      const passwordHashed = user.comparePassword(password)
      if (!passwordHashed) {
        res.json({
          success: false,
          message: 'Wrong Password'
        })
      } else {
        const token = jwt.sign(user.toObject(), config.secret, {
          expiresIn: 604800
        })
        // sending token to user
        res.json({
          success: true,
          token: 'JWT ' + token,
          user: {
            id: user._id,
            username: user.username,
            email: user.email,
            createdAt: user.createdAt
          }
        })
      }
    }
  })
})

// Get Profile

router.get('/profile', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user})
})

// Get all blogs

router.get('/all', (req, res, next) => {
  Blog.find()
    .sort({update: 'descending'})
    .exec(function (err, blog) {
      if (err) return next(err)
      res.json({
        blog: blog
      })
    })
})

// Get for particular user

router.get('/blog', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  Blog.find({postedBy: req.user._id})
    .populate('postedBy')
    .sort({update: 'descending'})
    .exec(function (err, blog) {
      if (err) return next(err)
      res.json({
        user: req.user,
        blog: blog
      })
    })
})

// Create posts

router.post('/blog', passport.authenticate('jwt', {session: false}), function (req, res, next) {
  const title = req.body.title
  const description = req.body.description

  escape(title)
  escape(description)
  User.findById({_id: req.user._id}, function (err, user) {
    if (err) return next(err)
    const blog = new Blog({
      postedBy: req.user._id,
      name: req.user.username,
      title: title,
      description: description
    })

    blog.save(function (err, msg) {
      if (err) return next(err)
      res.json({
        success: true,
        message: 'Successfully Added Blog'
      })
    })
  })
})

// Getting particular blog

router.get('/blogone/:blogid', function (req, res, next) {
  Comments.find({posted: req.params.blogid}, function (err, comments) {
    if (err) return next(err)
    res.json({
      success: true,
      comments: comments
    })
  })
})

// add comment to blog

router.post('/blogone/:blogid', function (req, res, next) {
  const blogId = req.params.blogid
  const name = req.body.name
  const comment = req.body.comment
  escape(name)
  escape(comment)
  if (typeof name === 'undefined') {
    res.json({
      success: false,
      message: 'Please Enter a Name'
    })
    return next()
  } else if (typeof comment === 'undefined') {
    res.json({
      success: false,
      message: 'Please Enter a comment'
    })
    return next()
  }
  User.findOne({username: name}, function (err, user) {
    if (err) return next(err)

    if (user) {
      res.json({
        success: false,
        message: 'Name used by Signed Up User please choose anything else'
      })
      return next()
    }
  })
  Blog.findById({_id: blogId}, function (err, blog) {
    if (err) return next(err)
    const comment = new Comments({
      comment: req.body.comment,
      name: req.body.name || req.user.username,
      posted: blog._id
    })
    comment.save(function (err) {
      if (err) return next(err)
      res.json({
        success: true,
        comment: comment,
        message: 'Successfully Added Comment'
      })
    })
  })
})

// create blog for non aunthenticated user

router.post('/blogAnon', function (req, res, next) {
  const name = req.body.name
  const title = req.body.title
  const description = req.body.description
  escape(name)
  escape(title)
  escape(description)
  if (typeof name === 'undefined') {
    res.json({
      success: false,
      message: 'Please Enter a Name'
    })
    return next()
  } else if (typeof title === 'undefined') {
    res.json({
      success: false,
      message: 'Please Enter a title'
    })
    return next()
  } else if (typeof description === 'undefined') {
    res.json({
      success: false,
      message: 'Please Enter description'
    })
    return next()
  }
  const blog = new Blog({
    name: name,
    title: title,
    description: description
  })

  blog.save(function (err, msg) {
    if (err) return next(err)
    res.json({
      success: true,
      message: 'Successfully Added Blog'
    })
  })
})

// getting one blog on click

router.get('/blog/:blogId', function (req, res, next) {
  Blog.findById({_id: req.params.blogId}, function (err, blog) {
    if (err) return next(err)
    res.json({
      success: true,
      blog: blog
    })
  })
})

// Getting blog to update

router.get('/update/:blogId', function (req, res, next) {
  Blog.findById({_id: req.params.blogId}, function (err, blog) {
    console.log(blog)
    if (err) return next(err)
    res.json({
      success: true,
      blog: blog
    })
  })
})

// Posting updated blog

router.post('/update/:blogId', function (req, res, next) {
  const blogId = req.params.blogId
  const title = req.body.title
  const description = req.body.description

  if (typeof title === 'undefined') {
    res.json({
      success: false,
      message: 'Please Enter title'
    })
    return next()
  }
  if (typeof description === 'undefined') {
    res.json({
      success: false,
      message: 'Please Enter description'
    })
    return next()
  }
  Blog.findById({_id: blogId}, function (err, blog) {
    if (err) return next(err)
    escape(title)
    escape(description)
    blog.title = req.body.title
    blog.description = req.body.description
    blog.save(function (err) {
      if (err) return next(err)
      res.json({
        success: true,
        message: 'Changes Updated'
      })
    })
  })
})

// Deleting the blog

router.post('/blog/:leave_id', function (req, res, next) {
  Blog.findByIdAndRemove(req.params.leave_id, function (err, user) {
    if (err) return next(err)
    res.json({
      success: true,
      message: 'Successfully Deleted'
    })
  })
})

// Settings route for user

router.get('/setting', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  res.json({user: req.user})
})

// Changing settings post route

router.post('/setting', passport.authenticate('jwt', {session: false}), (req, res, next) => {
  const displayName = escape(req.body.displayName)
  const password = escape(req.body.password)
  const confirmPassword = escape(req.body.confirmPassword)
  if (password !== confirmPassword) {
    res.json({
      success: false,
      message: 'Your passwords do not match'
    })
    return next()
  }

  if (password.length < 6) {
    res.json({
      success: false,
      message: 'Your password should be atleast 6 characters'
    })
    return next()
  }
  if (displayName.length > 10) {
    res.json({
      success: false,
      message: 'Your Display Name should be less than 10 characters'
    })
    return next()
  }

  User.findById({_id: req.user._id}, function (err, user) {
    if (err) return next(err)
    req.user.displayName = req.body.displayName
    const password = req.user.password = req.body.password
    req.user.bio = req.body.bio
    if (typeof password === 'undefined') {
      res.json({
        success: false,
        message: 'Please fill password field'
      })
    }
    req.user.save(function (err) {
      if (err) return next(err)
      res.json({
        success: true,
        message: 'Updated'
      })
    })
  })
})

// Exporting router

module.exports = router
