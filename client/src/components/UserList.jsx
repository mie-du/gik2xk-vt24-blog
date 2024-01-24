import UserItemSmall from './UserItemSmall';
function UserList() {
  const users = [
    {
      id: 1,
      email: 'mie@du.se',
      username: 'mikaela',
      firstName: 'Mikaela',
      lastName: 'Hedberg',
      description: null,
      imageUrl: 'https://users.du.se/~mie/common/images/mie.jpg',
      createdAt: '2022-11-17T22:42:14.000Z',
      updatedAt: '2022-11-17T00:00:00.000Z'
    },
    {
      id: 2,
      email: 'yoshi@du.se',
      username: 'yoshi',
      firstName: 'Yoshi',
      lastName: 'Akterkvist',
      description: null,
      imageUrl: 'https://users.du.se/~mie/common/images/yoshi.jpg',
      createdAt: '2022-11-17T22:42:14.000Z',
      updatedAt: '2022-11-17T00:00:00.000Z'
    },
    {
      id: 3,
      email: 'leia@du.se',
      username: 'princess',
      firstName: 'Leia',
      lastName: 'Vader',
      description: null,
      imageUrl: 'https://users.du.se/~mie/common/images/leia.jpg',
      createdAt: '2022-11-17T22:42:14.000Z',
      updatedAt: '2022-11-17T00:00:00.000Z'
    }
  ];
  return (
    <ul>
      {users?.length > 0 ? (
        users.map((user) => (
          <li key={`users_${user.id}`}>
            <UserItemSmall user={user} />
          </li>
        ))
      ) : (
        <h3>Kunde inte hämta användare</h3>
      )}
    </ul>
  );
}

export default UserList;
