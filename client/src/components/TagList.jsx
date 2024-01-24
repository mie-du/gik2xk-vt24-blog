import Tag from './Tag';
function TagList() {
  const tags = [
    {
      id: 1,
      name: 'tagg1',
      createdAt: '2023-12-22T12:39:23.000Z',
      updatedAt: '2023-12-22T12:39:23.000Z'
    },
    {
      id: 2,
      name: 'tagg2',
      createdAt: '2023-12-22T12:39:29.000Z',
      updatedAt: '2023-12-22T12:39:29.000Z'
    },
    {
      id: 3,
      name: 'tagg3',
      createdAt: '2023-12-22T12:39:29.000Z',
      updatedAt: '2023-12-22T12:39:29.000Z'
    },
    {
      id: 4,
      name: 'tagg4',
      createdAt: '2023-12-22T12:39:45.000Z',
      updatedAt: '2023-12-22T12:39:45.000Z'
    },
    {
      id: 5,
      name: 'vovvar',
      createdAt: '2024-01-15T13:26:22.000Z',
      updatedAt: '2024-01-15T13:26:22.000Z'
    },
    {
      id: 6,
      name: 'lek',
      createdAt: '2024-01-15T13:26:22.000Z',
      updatedAt: '2024-01-15T13:26:22.000Z'
    },
    {
      id: 7,
      name: 'bus',
      createdAt: '2024-01-15T13:26:22.000Z',
      updatedAt: '2024-01-15T13:26:22.000Z'
    }
  ];
  return (
    <ul>
      {tags?.length > 0 ? (
        tags.map((tag) => (
          <li key={tag.name}>
            <Tag text={tag.name} />
          </li>
        ))
      ) : (
        <h3>Kunde inte hämta användare</h3>
      )}
    </ul>
  );
}

export default TagList;
