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

export default (posts = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload; //Our actual posts
    case "CREATE":
      return [...posts, action.payload];
    case "UPDATE":
      return posts.map((post) =>
        post._id === action.payload._id ? action.payload : post
      );
    // post.map returns array
    // for each post we check if the post id is equal to the action.payload id and update it from the action.payload because it is now the updated post and if it is not equal to the action.payload id then we return the post as it is
    default:
      return posts;
  }
};
