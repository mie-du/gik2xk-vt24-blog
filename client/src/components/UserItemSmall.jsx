function UserItemSmall({ user }) {
  return (
    <>
      <h3>{user.username}</h3>
      <img width="100" src={user.imageUrl} />
    </>
  );
}

export default UserItemSmall;
