const mongoose = require('mongoose')

const dbUrl = 'mongodb+srv://admin123:vwxyz@cluster0.auahpdh.mongodb.net/bookreview_db?retryWrites=true&w=majority&appName=Cluster0'

mongoose.set('strictQuery', false)

module.exports = () => {
    return mongoose.connect(dbUrl, {
        useNewUrlParser: true, useUnifiedTopology: true
    })
}