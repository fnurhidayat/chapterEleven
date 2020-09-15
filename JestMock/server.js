// Keep the import statement above
require('dotenv').config()
const express = require('express')
const morgan = require('morgan')
const router = require('./router')

// Keep the initialization after the import statement
const app = express()

// Basic Express Configuration
app.locals.moment = require('moment')
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.set('view engine', 'pug')
if (process.env.NODE_ENV !== 'test')
  app.use(morgan('dev'))
app.use(router)
app.use(express.static('public'))

/* Export the app,
 * because we need the
 * server instance to run somewhere else
 * */
module.exports = app
