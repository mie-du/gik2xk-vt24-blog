import PostItemLarge from '../components/PostItemLarge';
import CommentForm from '../components/CommentForm';
import Comment from '../components/Comment';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

function PostDetail() {
  const post = {
    id: 3,
    title: 'Donec dapibus.',
    body: 'Proin risus. Praesent lectus. Vestibulum quam sapien, varius ut, blandit non, interdum in, ante. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Duis faucibus accumsan odio. Curabitur convallis. Duis consequat dui nec nisi volutpat eleifend. Donec ut dolor. Morbi vel lectus in quam fringilla rhoncus. Mauris enim leo, rhoncus sed, vestibulum sit amet, cursus id, turpis. Integer aliquet, massa id lobortis convallis, tortor risus dapibus augue, vel accumsan tellus nisi eu orci. Mauris lacinia sapien quis libero. Nullam sit amet turpis elementum ligula vehicula consequat. Morbi a ipsum. Integer a nibh. In quis justo. Maecenas rhoncus aliquam lacus. Morbi quis tortor id nulla ultrices aliquet. Maecenas leo odio, condimentum id, luctus nec, molestie sed, justo. Pellentesque viverra pede ac diam. Cras pellentesque volutpat dui. Maecenas tristique, est et tempus semper, est quam pharetra magna, ac consequat metus sapien ut nunc. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Mauris viverra diam vitae quam. Suspendisse potenti. Nullam porttitor lacus at turpis. Donec posuere metus vitae ipsum. Aliquam non mauris. Morbi non lectus. Aliquam sit amet diam in magna bibendum imperdiet. Nullam orci pede, venenatis non, sodales sed, tincidunt eu, felis. Fusce posuere felis sed lacus. Morbi sem mauris, laoreet ut, rhoncus aliquet, pulvinar sed, nisl. Nunc rhoncus dui vel sem. Sed sagittis. Nam congue, risus semper porta volutpat, quam pede lobortis ligula, sit amet eleifend pede libero quis orci. Nullam molestie nibh in lectus. Pellentesque at nulla. Suspendisse potenti. Cras in purus eu magna vulputate luctus. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Vivamus vestibulum sagittis sapien. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Etiam vel augue. Vestibulum rutrum rutrum neque. Aenean auctor gravida sem. Praesent id massa id nisl venenatis lacinia. Aenean sit amet justo. Morbi ut odio. Cras mi pede, malesuada in, imperdiet et, commodo vulputate, justo.',
    imageUrl: 'http://dummyimage.com/720x600.png/ff4444/ffffff',
    createdAt: '2021-10-29T14:06:05.000Z',
    updatedAt: '2022-02-09T00:00:00.000Z',
    author: {
      id: 1,
      username: 'mikaela',
      email: 'mie@du.se',
      firstName: 'Mikaela',
      lastName: 'Hedberg',
      imageUrl: 'https://users.du.se/~mie/common/images/mie.jpg'
    },
    tags: ['tagg2'],
    comments: [
      {
        title: 'Voff!',
        body: 'Ge mig mat!',
        author: 'princess',
        createdAt: '2023-12-22T12:41:26.000Z'
      },
      {
        title: 'Det tycker jag också!',
        body: 'Jättejättefint',
        author: 'yoshi',
        createdAt: '2023-12-22T12:40:11.000Z'
      },
      {
        title: 'Hej!',
        body: 'Fint inlägg hörru!',
        author: 'mikaela',
        createdAt: '2023-12-22T12:40:00.000Z'
      }
    ]
  };

  const navigate = useNavigate();

  return (
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
  );
}

export default PostDetail;
