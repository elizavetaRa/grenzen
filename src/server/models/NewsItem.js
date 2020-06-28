const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsItemSchema = new Schema({
    title: {
        type: String,
        required: true,
        unique: false,
    },
    content: {
        type: String,
        required: true,
        unique: false,
    },

    date: {
        type: Number,
        required: true,
        unique: false,
    },
    image: {
        type: String,
        required: true,
        unique: false,
    },

    youtube: {
        type: String,
        required: true,
        unique: false,
    },

    hashtags: [{
        type: String,
        required: true,
        unique: false,
    }]
})

module.exports = mongoose.model('NewsItem', newsItemSchema)