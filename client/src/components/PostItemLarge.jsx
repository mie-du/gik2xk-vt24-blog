import Tag from './Tag';
import UserItemSmall from './UserItemSmall';

function PostItemLarge({ post }) {
  return (
    <div>
      <h3>{post.title}</h3>
      {post.tags &&
        post.tags.map((tag) => <Tag key={`tag_${tag}`} text={tag} />)}
      <div>
        <p>Skrivet av: </p>
        <UserItemSmall user={post.author} />
      </div>
      <div>
        <img src={post.imageUrl} height="400" />
        <p>Skrivet den {post.createdAt}</p>
        <p>{post.body}</p>
      </div>
    </div>
  );
}

export default PostItemLarge;
