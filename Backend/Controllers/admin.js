const asyncErrorWrapper = require("express-async-handler")
const Story = require('../Models/story');

const acceptStory = asyncErrorWrapper(async(req, res, next)=>{
    let {slug, admin} = req.params;
    console.log('im here',admin);
    slug = slug.toString()
    console.log("slug id ,", slug);
    console.log('admin accessed ', slug);
    const story = await Story.findOne({slug : slug })
    console.log(story);
    story.accepted = true;
    story.save()
    console.log(story);
    res.status(200).json({
        success:true,
        data:story
    })
})



module.exports = {
    acceptStory
}