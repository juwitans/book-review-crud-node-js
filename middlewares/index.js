const ObjectId = require('mongoose').Types.ObjectId

const validateId = (req, res, next) => {
    if (ObjectId.isValid(req.params.id) == false) {
        res.status(400).json({
            error: `Bad Request. Id (${req.params.id}) is not valid.`
        })
    } else {
        next()
    }
}

const notFoundError = (req, res) => {
    res.status(404).json({
        error: 'no record found with id' + req.params.id
    })
}

const errorHandler = (error, req, res, next) => {
    res.status(500).json({ error })
}

module.exports = {
    validateId,
    notFoundError,
    errorHandler
}