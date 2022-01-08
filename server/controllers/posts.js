const PostMessage = require('../models/postMessage')

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
module.exports = { getPosts, creatPost }

