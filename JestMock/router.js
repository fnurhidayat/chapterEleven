const router = require('express').Router()

// Import the controller
const home = require('./controllers/homeController')
const post = require('./controllers/postController')
const auth = require('./controllers/authController')
const admin = require('./controllers/admin')

// Root Endpoint
router.get('/', home.index)
router.get('/google', home.googlePage)
router.post('/api/v1/posts', post.create)
router.get('/api/v1/posts', post.index)

router.post('/api/v1/auth/login', auth.login)

// View endpoint
router.get('/admin/posts', admin.post.index)
router.get('/admin/posts/new', admin.post.new)
router.post('/admin/posts/new', admin.post.create)
router.get('/admin/posts/:id', admin.post.show)

module.exports = router
