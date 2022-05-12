// import dependecies
const express = require('express')
const handlebars = require('express-handlebars')
const router = require('./server/router/router')
require('dotenv').config()

const app = express()
const port = process.env.PORT || 3000

app
  .set('view engine', 'hbs')
  .set('views', 'server/views')
  .engine('hbs', handlebars({ extname: 'hbs' }))

  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(express.static('public'))
  .use(router)

  .listen(port, () => {
    console.log(`Server running on port ${port}🎉`)
  })
