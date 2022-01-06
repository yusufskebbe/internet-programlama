const express =  require('express')
const {getPosts} = require('../controllers/posts')



const router = express.Router();



router.get('/' ,getPosts);
 module.exports = router