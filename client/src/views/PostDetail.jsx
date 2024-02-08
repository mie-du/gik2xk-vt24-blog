import PostItemLarge from '../components/PostItemLarge';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';
import { Box, Button, Container } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { addComment, getOne } from '../services/PostService';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import EditIcon from '@mui/icons-material/Edit';

function PostDetail() {
  const { id } = useParams();

  const [post, setPost] = useState(null);

  useEffect(() => {
    getOne(id).then((post) => setPost(post));
  }, [id]);

  const navigate = useNavigate();

  function onCommentAdd(comment) {
    addComment(post.id, comment)
      .then((comment) => getOne(id))
      .then((post) => setPost(post));
  }

  return post ? (
    <Container maxWidth="lg">
      <PostItemLarge post={post} />
      <Box display="flex" justifyContent="space-between" mb={4}>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<ChevronLeftIcon />}
          sx={{ mr: 2 }}
          onClick={() => navigate(-1)}>
          Tillbaka
        </Button>
        <Button
          startIcon={<EditIcon />}
          variant="contained"
          onClick={() => navigate(`/posts/${post.id}/edit`)}>
          Ändra
        </Button>
      </Box>
      <CommentForm onSave={onCommentAdd} />
      {post.comments &&
        post.comments.map((comment, i) => (
          <Comment key={`comment_${i}`} comment={comment} />
        ))}
    </Container>
  ) : (
    <h3>Kunde inte hämta inlägg</h3>
  );
}

export default PostDetail;
