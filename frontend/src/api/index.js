import axios from 'axios'
const url = 'http://localhost:5000/posts'





export const deletePost = (id) => axios.delete('${url}/${id}')


export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
