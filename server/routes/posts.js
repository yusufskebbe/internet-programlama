const express = require('express')
const { getPosts, creatPost } = require('../controllers/posts')



const router = express.Router();



router.get('/', getPosts);
router.post('/', creatPost);

module.exports = router