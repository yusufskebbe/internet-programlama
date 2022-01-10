import { combineReducers } from "redux";
import { postReducer } from './posts'
import { authReducer } from './auth'


export default combineReducers({

  posts: postReducer,
  auth: authReducer

})