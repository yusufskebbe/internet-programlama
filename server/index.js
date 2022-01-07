const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const cors = require('cors')


const postRoutes = require('./routes/posts')
const app = express()

app.use(bodyParser.json({ limit: "32mb", extended: true }))
app.use(bodyParser.urlencoded({ limit: "32mb", extended: true }))
app.use(cors())

app.use('/posts', postRoutes)

const CONNECTION_URL = 'mongodb+srv://admin:InstaLife@instalife.r9u84.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'
const PORT = process.env.PORT || 5000
mongoose.connect(CONNECTION_URL)
   .then(() => app.listen(PORT, () => console.log(`Server running on port:${PORT}`)))
   .catch(err => console.log(err.message))