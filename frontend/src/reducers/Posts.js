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
    switch (action.type){
        case 'FETCH_ALL':
            return action.payload; //Our actual posts
        case 'CREATE':
            return [...posts, action.payload];
        default:
            return posts;
    }
}