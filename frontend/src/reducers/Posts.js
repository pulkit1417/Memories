// const reducer = (state = [], action) => {
//     switch (action.type){
//         case 'FETCH_ALL':
//             return state;
//         case 'CREATE':
//             return state;
//         default:
//             return state;
//     }
// }

import { FETCH_ALL, CREATE, UPDATE, DELETE, FETCH_BY_SEARCH } from "../constants/actionTypes";

export default (posts = [], action) => {
  switch (action.type) {
    case FETCH_ALL:
      return action.payload; //Our actual posts
    case FETCH_BY_SEARCH:
       return action.payload;
    case CREATE:
      return [...posts, action.payload];
    case UPDATE:
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    // post.map returns array
    // for each post we check if the post id is equal to the action.payload id and update it from the action.payload because it is now the updated post and if it is not equal to the action.payload id then we return the post as it is
    case DELETE:  
      return posts.filter((post) => post._id !== action.payload);
    default:
      return posts;
  }
};
