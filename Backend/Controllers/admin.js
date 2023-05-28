const asyncErrorWrapper = require("express-async-handler")


const getPendingStory = asyncErrorWrapper((req, res, next)=>{
    //
})

const acceptStory = asyncErrorWrapper((req, res, next)=>{
    //
})

const rejectStory = asyncErrorWrapper((req, res, next)=>{
    //
})

module.exports = {
    getPendingStory,
    acceptStory,
    rejectStory
}