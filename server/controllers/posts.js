const PostMassage = require('../models/postMessage.js')

 const getPosts= async(req,res) => {
    try {
        const postMessage = await PostMassage.find()
        console.log(postMessage);
        
        res.status(200).json(postMessage)
    } catch (error) {
        res.status(404).json({Massage})
    }

}
const creatPost = async(req,res) => {
const body = req.body;

 const newPost = new PostMassage(body)

try {
    await newPost.save()

    res.status(202).json(newPost)
} catch (error) {
    res.status(409).json({massage : error.massage})
 }
}
module.exports = {getPosts,creatPost}
 
