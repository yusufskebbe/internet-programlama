

export const postReducer = (posts = [], action) => {
  switch (action.type) {
    case 'UPDATE':
      return posts.map((post) => post._id === action.payload._id ? action.payload : post);
    case 'DELETE':
      return posts.filter((posts) => posts._id !== action.payload);
    case 'FETCH_ALL':
      return action.payload
    case 'CREATE':
      return [...posts, action.payload];
    default:
      return posts;
  }
}