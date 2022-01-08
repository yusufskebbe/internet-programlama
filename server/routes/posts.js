const express = require('express')
const { getPosts, creatPost ,updatePost,deletePost} = require('../controllers/posts')



const router = express.Router();



router.get('/', getPosts);
router.post('/', creatPost);
router.patch('/:id',updatePost)
router.delete('/:id',deletePost)
module.exports = router