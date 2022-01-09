const express = require('express')
const { signin, signup} = require('../controllers/users')


router.post('/signin', signin)
router.post('/signup', signup)


const router = express.Router();
module.exports = router