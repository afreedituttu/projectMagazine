const deleteImageFile = require('../Helpers/Libraries/deleteImageFile');
const News = require('../Models/news');

const getNews = async(req, res)=>{
    console.log('on news');
    try{
        const news = await News.find({}).lean();
        res.status(200).json({'newses':news});
    }catch(err){
        res.status(500).json(err);
    }
}
const addNews = async(req, res)=>{
    console.log("at news");
    const {title, desc} = req.body;
    console.log(req.savedStoryImage);
    console.log(title, desc);
    try{
        const news = await News.create({
            title:title,
            desc:desc,
            image:req.savedStoryImage
        });
        res.status(200).json({news, success:true});
    }catch(err){
        console.log(err);
        res.status(400).json({err, success:false});
    }
}
const deleteNews = async(req, res)=>{
    try{
        console.log('on delete news');
        const {slug} = req.params;
        console.log(slug);
        const news = await News.findOne({_id:slug}).lean();
        console.log(news);
        deleteImageFile(req, news.image);
        await News.findByIdAndDelete({_id:slug})
        res.status(200).json({'success':true})
    }catch(err){
        console.log(err);
        res.status(200).json(err)
    }
}
const updateNews = async(req, res)=>{
    //
}

module.exports = {getNews, addNews, deleteNews, updateNews};