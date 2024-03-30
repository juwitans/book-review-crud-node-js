const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const connectDb = require('./db.js')
const bookReviewRoutes = require('./controllers/bookreview.controller')
const { errorHandler } = require('./middlewares')

const app = express()

app.use(bodyParser.json())
app.use(cors())
app.use('/api/bookreviews', bookReviewRoutes)
app.use(errorHandler)

connectDb()
    .then(() => {
        console.log('db connection succeeded.')
        app.listen(3000,
            () => console.log('server started at 3000.'))
    })
    .catch(err => console.log(err))