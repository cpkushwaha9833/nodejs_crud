const reviewController = require('../controllers/reviewController')

const reviewRouter = require('express').Router()


reviewRouter.post('/addReview', reviewController.addReview)

reviewRouter.get('/allReview', reviewController.getAllReview)

reviewRouter.get('/:id', reviewController.getOneReview)

reviewRouter.put('/:id', reviewController.updateReview)

reviewRouter.delete('/:id', reviewController.deleteReview)


module.exports = reviewRouter;