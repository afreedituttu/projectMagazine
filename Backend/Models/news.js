const mongoose = require('mongoose');

const NewsSchema = mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    image:{
        type:String,
        default:'default.jpg'
    },
    desc:{
        type:String,
        required:true
    }
})

const NewsModel = mongoose.model("News", NewsSchema);

module.exports = NewsModel;