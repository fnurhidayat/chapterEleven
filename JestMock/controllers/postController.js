const { Post } = require('../models')

module.exports = {

  async all(req, res) {
    const posts = await Post.findAll()
    res.render('postAll', {
      posts
    })
  },
  
  index(req, res) {
    Post.findAll()
      .then(posts => {
        res.status(200).json({
          status: 'success',
          data: {
            posts
          }
        })
      }) 
  },

  create(req, res) {
    Post.create(req.body)
      .then(post => {
        res.status(201).json({
          status: 'success',
          data: {
            post
          }
        }) 
      })
      .catch(err => {
        res.status(422).json({
          status: 'fail',
          errors: [err.message]
        }) 
      })
  },
}
