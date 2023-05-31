const router = require('express').Router();
const {getNews, addNews, deleteNews, updateNews} = require('../Controllers/news');
const imageUpload = require('../Helpers/Libraries/imageUpload');

router.post('/getnews', getNews);
router.post('/addnews', imageUpload.single("image"), addNews);
router.post('/deletenews/:slug', deleteNews);
router.post('/update', updateNews);

module.exports = router;