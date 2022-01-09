const express = require('express')
const { getPosts, creatPost ,updatePost,deletePost,likePost} = require('../controllers/posts')



const router = express.Router();



router.get('/', getPosts);
router.post('/', creatPost);
router.patch('/:id',updatePost);
router.delete('/:id',deletePost);
router.patch('/:id/likePost',likePost);

module.exports = router