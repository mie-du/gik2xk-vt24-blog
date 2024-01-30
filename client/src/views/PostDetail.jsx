import PostItemLarge from '../components/PostItemLarge';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';
import { Button } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getOne } from '../services/PostService';

function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    getOne(id).then((post) => setPost(post));
  }, [id]);

  const navigate = useNavigate();

  return post ? (
    <div>
      <PostItemLarge post={post} />
      <Button onClick={() => navigate(-1)}>Tillbaka</Button>
      <Button onClick={() => navigate(`/posts/${post.id}/edit`)}>Ändra</Button>
      <CommentForm />
      {post.comments &&
        post.comments.map((comment, i) => (
          <Comment key={`comment_${i}`} comment={comment} />
        ))}
    </div>
  ) : (
    <h3>Kunde inte hämta inlägg</h3>
  );
}

export default PostDetail;
