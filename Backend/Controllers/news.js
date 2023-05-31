const deleteImageFile = require('../Helpers/Libraries/deleteImageFile');
const News = require('../Models/news');

const getNews = async(req, res)=>{
    try{
        const news = await News.find({}).lean();
        res.status(200).json(news);
    }catch(err){
        res.status(500).json(err);
    }
}
const addNews = async(req, res)=>{
    console.log("at news");
    const {title, desc} = req.body;
    const {savedStoryImage} = req;
    try{
        const news = News.create({
            title:title,
            desc:desc,
            img:savedStoryImage
        });
        res.status(200).json(news);
    }catch(err){
        console.log(err);
        res.status(400).json(err);
    }
}
const deleteNews = async(req, res)=>{
    try{
        const {slug} = req.params;
        const news = News.findOne({_id:slug});
        deleteImageFile(req, news.image);
        await news.remove();
        res.status(200).json('done')
    }catch(err){
        res.status(200).json(err)
    }
}
const updateNews = async(req, res)=>{
    //
}

module.exports = {getNews, addNews, deleteNews, updateNews};