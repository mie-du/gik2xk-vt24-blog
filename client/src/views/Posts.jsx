import { useParams, useLocation } from 'react-router-dom';

function Posts() {
  console.log(useParams(), useLocation());
  return <h2>Posts</h2>;
}

export default Posts;
