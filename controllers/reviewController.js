const db = require('../models')

//main model
const Review = db.reviews


//add review 
const addReview = async (req,res) => {
    let info = {
        rating: req.body.rating,
        description: req.body.description
    }
    const review = await Review.create(info)
    res.status(200).send(review)
}


//get all reviews
const getAllReview = async (req,res) => {
    const reviews = await Review.findAll({})
    res.status(200).send(reviews)
}


//get single review
const getOneReview = async (req,res) => {
    const id = req.params.id
    const review = await Review.findOne({where: {id: id}})
    res.status(200).send(review)
}


//update review
const updateReview = async (req,res) => {
    const id = req.params.id
    const review = await Review.update(req.body, {where: {id: id}})
    res.status(200).send(review)
}


//delete review
const deleteReview = async (req,res) => {
    const id = req.params.id
    await Review.destroy({where: {id: id}})
    res.status(200).send("review deleted successfully")
}


module.exports = {
    addReview,
    getAllReview,
    getOneReview,
    updateReview,
    deleteReview
}