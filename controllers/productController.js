const db = require('../models')
 

//create main model
const Product = db.products


//add product
const addProduct = async (req,res) => {
    let info = {
        title: req.body.title,
        price: req.body.price,
        description: req.body.description,
        published: req.body.published ? req.body.published: false
    }

    const product = await Product.create(info)
    res.status(200).send(product)
    console.log(product)
}


//get all products 
const getAllProduct = async (req,res) => {
    const products = await Product.findAll({})
    res.status(200).send(products)
    console.log(products)
}


// get single product
const getOneProduct = async (req,res) => {
    const id = req.params.id
    const product = await Product.findOne({where: {id: id}})
    res.status(200).send(product)
}



// update product
const updateProduct = async (req,res) => {
    const id = req.params.id
    const product = await Product.update(req.body, {where: {id: id}})
    res.status(200).send(product)
}


// delete product
const deleteProduct = async (req,res) => {
    const id = req.params.id
    await Product.destroy({where: {id: id}})
    res.status(200).send("product deleted successfully")
}



// published product
const publishedProduct = async (req,res) => {
    const id = req.params.id
    const product = await Product.findAll({where: {published: true}})
    res.status(200).send(product)
}



module.exports = {
    addProduct,
    getAllProduct,
    getOneProduct,
    updateProduct,
    deleteProduct,
    publishedProduct
}