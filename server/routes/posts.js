const express = require('express')
const { getPosts, creatPost ,updatePost} = require('../controllers/posts')



const router = express.Router();



router.get('/', getPosts);
router.post('/', creatPost);
router.patch('/:id',updatePost)

module.exports = router