const router = require('express').Router();
const {getNews, addNews, deleteNews, updateNews} = require('../Controllers/news')

router.post('/getnews', getNews);
router.post('/addnews', addNews);
router.post('/deletenews', deleteNews);
router.post('/update', updateNews);

module.exports = router;