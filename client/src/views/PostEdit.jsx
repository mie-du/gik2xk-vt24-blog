import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getOne } from '../services/PostService';

function PostEdit() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    if (id) {
      getOne(id).then((post) => setPost(post));
    } else {
      setPost(null);
    }
  }, [id]);
  console.log(post);
  return <h2>PostEdit</h2>;
}

export default PostEdit;
