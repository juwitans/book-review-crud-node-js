const mongoose = require('mongoose')

module.exports = mongoose.model('BookReview', {
    title: { type: String},
    authors: [{type: String}],
    review: { type: String },
    rate: { type: Number }
})