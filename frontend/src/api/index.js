import axios from 'axios'
const url = 'http://localhost:5000/posts'


//import axios from 'axios';

//const API = axios.create({ baseURL: 'http://localhost:5000' })

/*
export const fetchPosts = () => API.get('/posts')
export const createPost = (newPost) => API.post('/posts', newPost)
*/

export const fetchPosts = () => axios.get(url)
export const createPost = (newPost) => axios.post(url, newPost)
export const updatePost = (id, updatedPost) => axios.patch(`${url}/${id}`, updatedPost)
