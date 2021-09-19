const mongoose = require('mongoose')

const photosSchema = new mongoose.Schema({
    url: {
        type: String
    },
    thumbnail_url: {
        type: String
    },
    styleId: {
        type: Number
    }
})

const skusSchema = new mongoose.Schema({
    size: {
        type: String
    },
    quantity: {
        type: Number
    },
    styleId: {
        type: Number
    }
})

const stylesSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    sales_price: {
        type: Number,
    },
    original_price: {
        type: Number
    },
    default_style: {
        type: Boolean
    },
    styleId: {
        type: Number
    },
    photos: [photosSchema],
    skus: [skusSchema]
})

const stylesProductSchema = new mongoose.Schema({
    productId: {
        type: Number,
    },
    results: [stylesSchema]
})

const featuresSchema = new mongoose.Schema({
    feature: {
        type: String,
    },
    valule: {
        type: String,
    }
})

const productsSchema = new mongoose.Schema({
    name: {
        type: String,
    },
    slogan: {
        type: String,
    },
    description: {
        type: String,
    },
    category: {
        type: String,
    },
    default_price: {
        type: Number,
    },
    productId: {
        type: Number,
    },
    features: [featuresSchema]
})

module.exports = mongoose.model('StylesProduct', stylesProductSchema)