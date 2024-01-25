import { Link } from 'react-router-dom';

function UserItemSmall({ user }) {
  return (
    <>
      <Link to={`/users/${user.id}/posts`}>
        <h3>{user.username}</h3>
        <img width="100" src={user.imageUrl} />
      </Link>
    </>
  );
}

export default UserItemSmall;
