
const productModel = require('../Models/ProductModel')

const registerProduct =  async (req, res) => {
    try {
        const newProduct = productModel ({
            name : req.body.name,
            price:req.body.price,
            description : req.body.description,
            cetegory : req.body.cetegory,
            image: req.file.filename
        })

        const SaveProduct = await newProduct.save()
        if(SaveProduct){
            res.send(SaveProduct)
        }
        
    } catch (error) {
        res.send(error)
        
    }
}

// get

const getProduct = async (req, res) => {
    try {

        const {cetegory} = req.params || {}

        let filterData ={}
        if(cetegory){
            filterData = {cetegory}
        }

        const getData = await productModel.find(filterData)
        if (getData){
            res.send(getData)
        }
        
    } catch (error) {
        res.send(error)
        
    }

}

// single api

const getSingleData = async (req, res) => {
    try {
        const SingleProduct = await productModel.find({
            _id: req.params.id
        })
        if(SingleProduct)
        {
            res.send(SingleProduct)
        }
    } catch (error) {
console.log(error)        
    }

}







module.exports = {registerProduct, getProduct, getSingleData}