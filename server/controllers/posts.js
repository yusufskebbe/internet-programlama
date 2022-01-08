const PostMessage = require('../models/postMessage');
const { post } = require('../routes/posts');
const mongoose = 'mongoose'

const getPosts = async (req, res) => {
    try {
        const postMessage = await PostMessage.find()
        console.log(postMessage);

        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({ Massage })
    }

}
const creatPost = async (req, res) => {
    const body = req.body;

    const newPost = new PostMessage(body)

    try {
        await newPost.save()

        res.status(201).json(newPost)
    } catch (error) {
        res.status(409).json({ massage: error.massage })
    }
}


const updatePost = async(req,res) => {
    const {id: _id } = req.params

    const post = req.body

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No post with that id');

const updatePost  = await PostMessage.findByIdAndUpdate(_id, post, {new: true})
res.json(updatePost)

}

module.exports = { getPosts, creatPost,updatePost }

