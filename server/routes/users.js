const express = require('express')
const { signUp, signIn } = require('../controllers/users')

const router = express.Router();

router.post('/signin', signIn)
router.post('/signup', signUp)


module.exports = router