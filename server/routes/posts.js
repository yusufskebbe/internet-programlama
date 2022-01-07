const express =  require('express')
const {getPosts} = require('../controllers/posts')



const router = express.Router();



router.get('/' , getPosts);
router.post('/' , createPost);

 module.exports = router