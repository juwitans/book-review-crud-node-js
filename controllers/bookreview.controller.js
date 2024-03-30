const express = require('express')
const router = express.Router()

const BookReview = require('../models/bookreview.model')
const { generateCrudMethods } = require('../services')
const bookReviewCrud = generateCrudMethods(BookReview)
const { validateId, notFoundError } = require('../middlewares')

router.get('/', async (req, res, next) => {
    try {
        const data = await bookReviewCrud.getAll()
        res.json(data)
    } catch (err) {
        next(err)
    }
})

router.get('/:id', validateId, async (req, res, next) => {
    try {
        const data = await bookReviewCrud.getById(req.params.id)
        if (data) res.send(data)
        else notFoundError(req, res)
    } catch (err) {
        next(err)
    }
})

router.post('/', async (req, res, next) => {
    try {
        const data = await bookReviewCrud.create(req.body)
        res.status(201).json(data)
    } catch (err) {
        next(err)
    }
})

router.put('/:id', validateId, async (req, res) => {
    try {
        const data = await bookReviewCrud.update(req.params.id, req.body)
        if (data) res.send(data)
        else notFoundError(req, ress)
    } catch (err) {
        next(err)
    }
})

router.delete('/:id', validateId, async (req, res) => {
    try {
        const data = await bookReviewCrud.delete(req.params.id)
        if (data) res.send("successfully deleted review")
        else notFoundError(req, ress)
    } catch (err) {
        next(err)
    }
})

module.exports = router