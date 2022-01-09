
import { DELETE, CREATE, FETCH_ALL, UPDATE } from '../constants/actionsTypes'

export const postReducer = (posts = [], action) => {
  switch (action.type) {
    case DELETE:
      return posts.filter((post) => post._id !== action.payload);
    case UPDATE:

    case UPDATE:
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case FETCH_ALL:
      return action.payload;
    case CREATE:
      return [...posts, action.payload];
    default:
      return posts;
  }
}