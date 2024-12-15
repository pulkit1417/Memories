import { useSelector } from 'react-redux';
import Post from './Post/Post'
import useStyles from './styles';
  

const Posts = () => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts); //how do we know that these are posts - these are being returned from the reducers in index.js

  console.log(posts);
  return (
    <>

    <div>Posts</div>
    <Post />
    <Post />
    </>
  )
}

export default Posts