const { Post } = require('../../models')
module.exports = {
  async index(req, res) {
    const posts = await Post.findAll()
    res.render('posts/index', {
      posts
    })
  },

  async new(req, res) {
    res.render('posts/create')
  },

  async create(req, res) {
    Post.create(req.body)
      .then(() => {
        res.redirect('/admin/posts')
      })
      .catch(err => {
        res.status(422).json({
          status: 'fail',
          errors: [err.message]
        }) 
      })
  },

  async show(req, res) {
    const post = await Post.findByPk(req.params.id)
    if (!post) return res.status(404).send('404 Not Found')

    res.render('posts/show', {
      post
    })
  }
}
